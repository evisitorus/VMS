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
    # Then The Vendor already enter to VMS Portal and can continue their activity into it

  Scenario Outline: The Vendor input wrong Email and Password
    Given The Vendor is on "Login" Form on VMS Portal
    And The Vendor input "Email" with value "<email>"
    And The Vendor input "Password" with value "<password>"
    And The Vendor clicks "Login" button
    And The Vendor will get error message "<copywriting>"
    And The Vendor selects "Yes" button
    # Then The Vendor must type right password on "Password" input-type on "Login" Form

    Examples:
        | case                               | result       | email                 | password  | copywriting	   	                                                                                           |
        | [negative case - wrong email]      | Login failed | admin@abadijaya.co    | 1234      | Email tidak terdaftar, silahkan inputkan email benar atau lakukan registrasi jika anda belum memiliki akun.|
        | [negative case - wrong password]   | Login failed | admin@abadijaya.co.id | 12345     | Password yang anda inputkan salah, silahkan ulangi!                                                        |

 #negatif scenario,forgot Password
#   Scenario:
    #  Given The Vendor is on "Login" Form on VMS Portal 
    #   When The Vendor forgot his/her password
    #    And The Vendor must clicks "Forgot Password" Link
    #    And The Vendor will brings to "Forgot Password" form to type his/her registered email
    #    """
    #    {
       
    #        "email" : "admin@abadijaya.co.id"
    #        "button" : "Ok"
    #    }
    #    """
    #    And The Vendor must clicks "OK" button
    #    And The Vendor will get link for typing new password on his/her email
    #    And The Vendor must checks his/her email
    #    And The Vendor must select "Renew Password" email 
    #    And The Vendor should be define his/her new password on "Renew Password" Form
    #    """
    #    {
    #       "passwordBaru" : "W@rMachineX123",  #password must me combination cointains numeric, alphanumeric and special character with maximum input 15 
    #                                         #if user input more than 15 chars, input type locked
    #       "ulangiPassword" : "W@rMachineX123"
    #       "button"  : "Yes"
    #    }
    #    """
    #    And The Vendor must selects "Yes" button
    #    And The Vendor will brings to "Login" Form 
    # Then The Vendor can test his/her new password on "Login" form while they can be enter into the app