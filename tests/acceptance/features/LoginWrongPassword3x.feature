#language: en
#workflow
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
            "Password" : "12345"
        
        }
        """
        And The Vendor clicks "Login" button
        And The Vendor selects "Yes" button
        And The Vendor clicks "Login" button
        And The Vendor selects "Yes" button
        And The Vendor clicks "Login" button
        And The Vendor selects "Yes" button
        And The Vendor clicks "Login" button
        And The Vendor will get warning message 
        """
        {
        
            "message" : "Akun anda terkunci, silahkan hubungi Admin di admin@vms-padi.co.id untuk melakukan recovery akun.",
            "button"  : "Yes"
        }
        """
        And The Vendor selects "Yes" button