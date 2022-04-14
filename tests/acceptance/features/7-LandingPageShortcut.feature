#language: en
#workflow
Feature: User - Landing Page 

As an User 
I want see information of vendor management system 
So that I continue my activation on VMS Portal such as Login (if I have an account on VMS) ; Register (if I don't have an account on VMS) or just visit to VMS Portal 

   Scenario: Visit VMS Portal
    Given The User already type VMS address on his or her browser 
     When The User clicks enter 
      And The User will see "Landing Page" of VMS 
     Then The User can see information which displayed on VMS such as shortcut for "Daftar" or "Masuk" or information in regards to Tender on "Informasi Pengadaan"

  Scenario: Register Shortcut for those who haven't account on VMS
    Given The User already type VMS address on his or her browser 
     When The User clicks enter 
       And The User will see "Landing Page" of VMS 
       And The User wants to Register his or her company on VMS 
       And The Vendor clicks button "Daftar" on Landing Page
    Then The User can continue to follow the process of Registration on "Registration" form 
    
  #Note
  #Please check scenario for "Register" on 1. VMS_Register_NPWP.feature

   Scenario: Register Shortcut for those who have account on VMS
    Given The Vendor already type VMS address on his or her browser 
     When The Vendor clicks enter 
       And The Vendor will see "Landing Page" of VMS 
       And The Vendor wants to entered into VMS
       And The Vendor clicks "Masuk" button on Landing Page
    Then The Vendor must define their credential on "VMS Login Form"  
    
  #Note
  #Please check scenario for "Login" on 1. VMS_LoginToVMS.feature

 #Note
 #Informasi Tender will be define at another scenario