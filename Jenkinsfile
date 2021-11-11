@Library('shared-library')
def vault = new Vault()

pipeline {
    agent { 
        node { 
            label 'Docker' 
        } 
    } 
    environment {
        REPO_NAME       = 'eproc-fe'
        REGISTRY_NAME   = '153829871065.dkr.ecr.ap-southeast-1.amazonaws.com/eproc-fe'
        AWS_CRED        = credentials('registry-aws-1-mysooltan')
        TAG             = sh(returnStdout: true, script: 'echo $(git rev-parse --short HEAD)')
        VAULT_ADDR      = "https://vault.playcourt.id"
        TESTING         = "berhasil"
    }
    stages {
        stage('Checkout SCM') {
            agent { label "Gitops" }
            steps {
                script { 
                    sh "ls -lha"
                    sh "sudo rm -Rf" 
                }
                checkout scm
                script {
                    sh 'echo $BRANCH_NAME'
                    echo "get COMMIT_ID"
                    sh 'echo -n $TAG > ./commit-id'
                    commitId = readFile('./commit-id')
                    sh 'mv docker/Dockerfile docker/nginx.conf .'
                    // if (env.BRANCH_NAME == 'master') {
                    //     sh 'vault kv get --format json smb/mysooltan/master/cluster | jq -r .data.data.cluster | base64 -di > $(pwd)/devops/k8s/config'
                    //     sh 'vault kv get --format json smb/mysooltan/master/fe | jq -r .data.data.env | base64 -di > .env'
                    // } else if (env.BRANCH_NAME == 'develop') {
                    //     sh 'vault kv get --format json smb/mysooltan/develop/cluster | jq -r .data.data.cluster | base64 -di > $(pwd)/devops/k8s/config'
                    //     sh 'vault kv get --format json smb/mysooltan/develop/fe | jq -r .data.data.env | base64 -di > .env'
                    // } else {
                    //     error "BRANCH TIDAK DIKETAHUI"
                    // }
                }
                stash(name: 'ws', includes:'**,./commit-id')
            }   
        }
        stage('Unstash Directory'){
            steps {
                unstash 'ws'
                script { 
                    sh 'echo $BRANCH_NAME'
                    sh "rm -Rf hasil hasil_test" 
                }
            }
        }
        stage('Build Image') {
            parallel {
                stage('Build Frontend') {
                    steps {
                        script {
                            sh 'docker build --target build-prod -t $REGISTRY_NAME:$BRANCH_NAME-$TAG .'
                            sh 'docker images'
                        }                        
                    }
                }
                stage('Build QA') {
                    steps {                   
                        script {
                            sh 'echo "build QA testing"'
                            if (env.BRANCH_NAME == 'develop') {
                                sh 'docker build --target build-stage -t vms-acceptancetest .'
                            } else {
                                sh 'echo "build QA testing"'
                            }                            
                        }                        
                    }
                }
            }
        }
        stage ('Run Frontend') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    sh 'echo "test frontend"'
                    try {
                        sh 'docker rm -f vms-fe vms-acceptancetest vms-unittest'
                    } catch (err) {
                        echo err.getMessage()
                    }
                    sh 'docker run -d --name vms-fe -p 4200:80 $REGISTRY_NAME:$BRANCH_NAME-$TAG'
                    sh 'mkdir hasil'
                }
            }
        }
        stage('Testing'){
            parallel {
                stage('Unit Test') {
                    when {
                        branch 'develop'
                    }
                    steps {
                        echo 'unittest'
                        script {
                            try {
                                sh 'docker run --name vms-unittest vms-acceptancetest npm run test -- --no-watch --no-progress --browsers=ChromeHeadlessCI --code-coverage' 
                            } catch (err) {
                                echo err.getMessage()
                            }
                        }                         
                        sh 'docker ps -a'
                        sh 'docker cp vms-unittest:/app/coverage/eproc-fe hasil_test'   
                        sh 'docker rm vms-unittest'   
                        publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'hasil_test', reportFiles: 'index.html', reportName: 'Unit Test Report', reportTitles: ''])
                    }
                }
                stage ('Acceptance Test') {
                    when {
                        branch 'develop'
                    }
                    steps {
                        script {
                            sh 'echo "Acceptance Test"'
                            try {                                    
                                sh 'docker run --name vms-test --net=host --ipc=host vms-acceptancetest npx codeceptjs run --reporter mochawesome'
                            } catch (err) {
                                env.TESTING = "gagal"
                            }
                            sh 'docker cp vms-test:/app/tests/acceptance/_output hasil'
                            sh 'docker rm -f vms-test'
                            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'hasil', reportFiles: 'scenario.html', reportName: 'Acceptance Test Report', reportTitles: ''])
                        }
                    }
                }
            }
        }
        stage('SonarQube Test') {
            agent { label "nodejs" }
            steps {
                script {
                    // if (env.BRANCH_NAME == 'develop') {
                    //     sh 'printf "\nsonar.branch.name=develop" >> sonar-project.properties'
                    //     sh 'docker run --rm -e SONAR_HOST_URL="https://sonarcloud.io" -e SONAR_LOGIN="bb039f114a310a2f488d628a081f74713d1095f9" -e SONAR_PROJECT_BASE_DIR="/app" -v "${PWD}:/app" sonarsource/sonar-scanner-cli:4.6'                        
                    // } else {
                    //     sh 'printf "\nsonar.branch.name=master" >> sonar-project.properties'
                    //     sh 'docker run --rm -e SONAR_HOST_URL="https://sonarcloud.io" -e SONAR_LOGIN="bb039f114a310a2f488d628a081f74713d1095f9" -e SONAR_PROJECT_BASE_DIR="/app" -v "${PWD}:/app" sonarsource/sonar-scanner-cli:4.6'
                    // } 
                    sh 'sudo rm -rf .scannerwork'                   
                    echo "defining sonar-scanner"
                    def scannerHome = tool 'SonarScanner';
                    withSonarQubeEnv('SonarQube') {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                    def qualitygate = waitForQualityGate()
                    if (qualitygate.status != "OK") {
                        error "Pipeline aborted due to quality gate coverage failure: ${qualitygate.status}"
                    }
                }   
            }
        }
        stage('Push Image') {
            steps {
                sh 'echo $AWS_CRED | base64 -di > ./devops/.aws/credentials'
                sh 'docker run --rm -i -v $(pwd)/devops/.aws:/root/.aws amazon/aws-cli ecr get-login-password | docker login --username AWS --password-stdin 153829871065.dkr.ecr.ap-southeast-1.amazonaws.com'
                sh 'docker images'
                sh 'docker push $REGISTRY_NAME:$BRANCH_NAME-$TAG'
                sh 'docker logout 153829871065.dkr.ecr.ap-southeast-1.amazonaws.com'
            }
        }
        // stage('Deploy') {
        //     steps {
        //         sh 'docker run --rm -i -v $(pwd)/devops/k8s:/generate/k8s -e PASS=$(docker run --rm -i -v $(pwd)/devops/.aws:/root/.aws amazon/aws-cli ecr get-login-password) baskaraerbasakti/generate generate_secret.py'
        //         sh 'docker run --rm -i -v $(pwd)/devops/k8s:/generate/k8s -e NAME=$REPO_NAME -e IMAGE=$REGISTRY_NAME:$BRANCH_NAME-$TAG baskaraerbasakti/generate generate_deployment.py'
        //         script {
        //             if (env.BRANCH_NAME == 'master') {
        //                 sh 'docker run --rm -i -v $(pwd)/devops/k8s:/root/.kube baskaraerbasakti/kubectl --kubeconfig /root/.kube/config apply --namespace=app -f /root/.kube/secret.yaml'
        //                 sh 'docker run --rm -i -v $(pwd)/devops/k8s:/root/.kube baskaraerbasakti/kubectl --kubeconfig /root/.kube/config apply --namespace=app -f /root/.kube/deployment.yaml'
        //             } else if (env.BRANCH_NAME == 'develop') {
        //                 sh 'docker run --rm -i -v $(pwd)/devops/k8s:/root/.kube baskaraerbasakti/kubectl --kubeconfig /root/.kube/config apply -f /root/.kube/secret.yaml'
        //                 sh 'docker run --rm -i -v $(pwd)/devops/k8s:/root/.kube baskaraerbasakti/kubectl --kubeconfig /root/.kube/config apply -f /root/.kube/deployment.yaml'
        //             }
        //         }
        //         sh 'sudo rm -rf devops'
        //     }
        // }
    }
}
