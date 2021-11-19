#language: en
#workflow
Feature: Vendor - Login to VMS

As a vendor 
I want to reset my password 
So that I can login into VMS 

  Scenario: Forgot Password 
     Given The Vendor is on "Login" Form on VMS Portal 
      When The Vendor forgot his/her password
       And The Vendor must clicks "Forgot Password" Link
       And The Vendor will brings to "Forgot Password" form to type his/her registered email
       """
       {
       
           "email" : "admin@abadijaya.co.id"
           "button" : "Ok"
       }
       """
       And The Vendor must clicks "OK" button
       And The Vendor will get link for typing new password on his/her email
       And The Vendor must checks his/her email
       And The Vendor must select "Renew Password" email 
       And The Vendor should be define his/her new password on "Renew Password" Form
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
    Then The Vendor can test his/her new password on "Login" form while they can be enter into the app