#language: en
#workflow
Feature: Vendor - Set As Vendor Basic

    As a vendor
    I want to finished my activation account process 
    So that I can enter to VMS

 #positive scenario 
  Scenario:
    Given The Vendor already finished activation process 
     When The Vendor clicks "Yes" button on latest process of activation 
       And The Vendor will brings to "Login" Form from VMS  
       And The Vendor must enter their credential by typing
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
       
           "message" : "Selamat Datang "PT. Abadi Jaya Sentosa Selalu" di Vendor Management System (VMS),
                        Silahkan lengkapi profil anda untuk dapat mengikuti Tender"
           "button"  : "Yes"
       }
       """
       And The Vendor must selects "Yes"
       And The Vendor will see badge "Vendor Basic" on his or her profile
    Then The Vendor already test his or her account by log-in to the app
    #Completing profile will be describe on another scenario 

 #negative scenario, wrong password 
  Scenario:
    Given The Vendor already finished activation process 
     When The Vendor clicks "Yes" button on latest process of activation 
       And The Vendor will brings to "Login" Form from VMS  
       And The Vendor must enter their credential by typing
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
       
           "message" : "Password yang anda inputkan salah, silahkan ulangi!", #maximum input wrong password 3x
           "button"  : "Yes"
       }
       """
       And The Vendor must selects "Yes"
    Then The Vendor must type right password on "Password" input-type on "Login" Form 

 #negative scenario, wrong email 
  Scenario:
    Given The Vendor already finished activation process 
     When The Vendor clicks "Yes" button on latest process of activation 
       And The Vendor will brings to "Login" Form from VMS  
       And The Vendor must enter their credential by typing
       """
       {
           "Email" : "admin@abadijaya.com",
           "Password" : "P0intBreak!23"
       
       }
       """
       And The Vendor must clicks "Login" button
       And The Vendor will get confirmation message 
       """
       {
       
           "message" : "Email tidak terdaftar, silahkan inputkan email benar atau lakukan registrasi jika anda belum memiliki akun",
           "button"  : "Yes"
       }
       """
       And The Vendor must selects "Yes"
    Then The Vendor must type registered email on "Email" input-type on "Login" Form 

 #negative scenario, wrong email and password
  Scenario:
    Given The Vendor already finished activation process 
     When The Vendor clicks "Yes" button on latest process of activation 
       And The Vendor will brings to "Login" Form from VMS  
       And The Vendor must enter their credential by typing
       """
       {
           "Email" : "admin@abadijaya.com",
           "Password" : "P0intBreak"
       
       }
       """
       And The Vendor must clicks "Login" button
       And The Vendor will get confirmation message 
       """
       {
       
           "message" : "User tidak dikenali, silahkan inputkan email dan password yang benar atau lakukan registrasi jika anda belum memiliki akun !",
           "button"  : "Yes"
       }
       """
       And The Vendor must selects "Yes"
    Then The Vendor must type registered email and password on "Email" and "Password" input-type on "Login" Form 