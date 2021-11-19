# language: en
# workflow
Feature: Vendor - Login to VMS

    As a vendor 
    I want to Login to VMS portal
    So that I can manage my VMS Account 

 #positive scenario 
    Scenario:
        Given The Vendor already registered on VMS
        When The Vendor wants to enter to VMS Portal  
        And The Vendor must login on "Login" form by entering their credential
        """
        {
            "Email" : "admin@abadijaya.co.id",
            "Password" : "P0intBreak!23"
        
        }
        """
        And The Vendor must clicks "Login" button
        And The Vendor will get confirmation message 
        """
        {
        
            "message" : "Selamat Datang "PT. Abadi Jaya Sentosa Selalu" di Vendor Management System (VMS) PaDi"
            "button"  : "Yes"
        }
        """
        And The Vendor must selects "Yes"
        Then The Vendor already enter to VMS Portal and can continue their activity into it

 #negatif scenario, wrong email more than 3 times 
    Scenario:
        Given The Vendor is on "Login" Form on VMS Portal 
        When The Vendor gives wrong "email" more than 3 times 
        """
        {
            "Email" : "admin@abadijaya.co",
            "Password" : "P0intBreak!23"
        
        }
        """
        And The Vendor must clicks "Login" button
        And The Vendor will get warning message 
        """
        {
        
            "message" : "Akun anda terkunci, silahkan hubungi Admin di admin@vms-padi.co.id untuk melakukan recovery akun",
            "button"  : "Yes"
        }
        """
        And The Vendor must selects "Yes"
        Then The Vendor must sent email to Administrator to recovery his or her VMS Account

 #negatif scenario, wrong password 
    Scenario:
        Given The Vendor is on "Login" Form on VMS Portal 
        When The Vendor gives wrong "password" 
        """
        {
            "Email" : "admin@abadijaya.com",
            "Password" : "P0intBreak" #maximum 3 times
        
        }
        """
        And The Vendor must clicks "Login" button
        And The Vendor will get confirmation message 
        """
        {
        
            "message" : "Password yang anda inputkan salah, silahkan ulangi!", #maximum input wrong password 3x
            "button"  : "Yes"
        }
        """
        And The Vendor must selects "Yes"
        Then The Vendor must type right password on "Password" input-type on "Login" Form
 
 #negatif scenario, wrong password more than 3 times 
    Scenario:
        Given The Vendor is on "Login" Form on VMS Portal 
        When The Vendor gives wrong "password" more than 3 times
        """
        {
            "Email" : "admin@abadijaya.co.id",
            "Password" : "P0intBreak"
        
        }
        """
        And The Vendor must clicks "Login" button
        And The Vendor will get confirmation message 
        """
        {
        
            "message" : "Silahkan klik reset password untuk mengatur password baru anda"
            "button"  : "Yes"
        }
        """
        And The Vendor must selects "Yes" button
        And The Vendor will brings to "Reset Password" form 
        And The Vendor should be define his or her new password 
        """
        {
            "passwordBaru" : "W@rMachin3X1",  #password must me combination cointains numeric, alphanumeric and special character with maximum input 15 
                                                #if user input more than 15 chars, input type locked
            "ulangiPassword" : "W@rMachin3X1"
            "button"  : "Yes"
        }
        """
        And The Vendor must selects "Yes" button
        And The Vendor will brings to "Login" Form 
        Then The Vendor can test his or her new password on "Login" form while they can be enter into the app

 #negatif scenario,forgot Password
    Scenario:
        Given The Vendor is on "Login" Form on VMS Portal 
        When The Vendor forgot his or her password
        And The Vendor must clicks "Forgot Password" Link
        And The Vendor will brings to "Forgot Password" form to type his or her registered email
        """
        {
        
            "email" : "admin@abadijaya.co.id"
            "button" : "Ok"
        }
        """
        And The Vendor must clicks "OK" button
        And The Vendor will get link for typing new password on his or her email
        And The Vendor must checks his or her email
        And The Vendor must select "Renew Password" email 
        And The Vendor should be define his or her new password on "Renew Password" Form
        """
        {
            "passwordBaru" : "W@rMachineX123",  #password must me combination cointains numeric, alphanumeric and special character with maximum input 15 
                                                #if user input more than 15 chars, input type locked
            "ulangiPassword" : "W@rMachineX123"
            "button"  : "Yes"
        }
        """
        And The Vendor must selects "Yes" button
        And The Vendor will brings to "Login" Form 
        Then The Vendor can test his or her new password on "Login" form while they can be enter into the app