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
           "Password" : "1234"
       
       }
       """
       And The Vendor clicks "Login" button
       And The Vendor will get confirmation message 
       """
       {
       
           "message" : "Selamat Datang PT. Megah Abadi Utama di Vendor Management System (VMS) PaDi.",
           "button"  : "Yes"
       }
       """
       And The Vendor selects "Yes" button
    Then The Vendor already enter to VMS Portal and can continue their activity into it

  Scenario: Login Verificator/BUMN
    Given The Verificator / BUMN already registered on VMS
     When The Verificator / BUMN wants to enter to VMS Portal 
      And The Verificator / BUMN click "Bukan Vendor? Klik di sini"
     Then The Verificator / BUMN will redirect to Login Verificator / BUMN

  Scenario Outline: The Vendor input wrong Email and Password
    Given The Vendor is on "Login" Form on VMS Portal
    And The Vendor input "Email" with value "<email>"
    And The Vendor input "Password" with value "<password>"
    And The Vendor clicks "Login" button
    And The Vendor will get error message "<copywriting>"
    And The Vendor selects "Yes" button
    Then The Vendor must type right password on "Password" input-type on "Login" Form

    Examples:
        | case                               | result       | email                 | password  | copywriting	   	                                                                                           |
        | [negative case - wrong email]      | Login failed | admin@abadijaya.co    | 1235      | Email tidak terdaftar, silahkan inputkan email benar atau lakukan registrasi jika anda belum memiliki akun.|
        | [negative case - wrong password]   | Login failed | admin@abadijaya.co.id | 12345     | Password yang anda inputkan salah, silahkan ulangi!                                                        |