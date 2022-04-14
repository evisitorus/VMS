#language: en
#workflow
Feature: Vendor - Logout from VMS 

As a vendor 
I want to Logout 
So that I can exit from the app  

  Scenario: Logout
    Given The Vendor is on VMS page 
     When The Vendor wants to exit from the app 
      And The Vendor must clicks "Logout" button where found the top of the form 
      And The Vendor will see confirmation message 
       """
       {
           "message" : "Terima Kasih!"
       
       }
       """
      And The Vendor will exit from the app 
     Then The Vendor will back to landing page from VMS