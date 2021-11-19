# language: en
# workflow
Feature: Vendor - Login to VMS

As a vendor 
I want to Login to VMS portal
So that I can manage my VMS Account 

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
       And The Vendor should be define his/her new password 
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
    Then The Vendor can test his/her new password on "Login" form while they can be enter into the app