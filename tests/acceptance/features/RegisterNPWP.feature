#language: en
#workflow
Feature: Calon Vendor - Registrasi 

    As a vendor
    I want to register my account
    So that I can be a Vendor for PaDi UMKM 

  #positive scenario for registration
    # Scenario: Registration Successfully
    #     Given The Vendor is on VMS landing page 
    #     When The Vendor wants to register his or her company
    #     And The Vendor goes to "Registration" form 
    #     And The Vendor must fill information which needed for registration on "Registration" form
    #     """
    #     {
        
    #         "npwp" : "99.999.999.9-999.999", #format input can only filled by numeric with separator (.) and (-) pls follow the pattern
    #                                         #can only input by 15 characters numeric, if more the object locked 
    #         "namaPerusahaan"  : "PT. Abadi Jaya Sentosa Selalu",
    #         "namaPIC" : "James Bucky Barnes",
    #         "emailPerusahaan" : "admin@abadijaya.co.id",
    #         "noHandphonePIC" : "0812345" #field can be filled by numeric only with lenght max 20 characters if more the text cant be typed
    #     }
    #     """
    #     And The Vendor clicks "Disclaimer"
    #     And The Vendor clicks button "Daftar" 
    #     # And The Vendor will get badge as "Vendor Basic" 
    #     # And The Vendor data will be stored at database and will be flag as "Terdaftar" 
    #     And The Vendor will see success message from the system 
    #     """
    #     {
    #         "message" : "Selamat anda telah terdaftar sebagai Vendor PaDi, silahkan cek email anda untuk melakukan aktivasi akun",
    #         "button"  : "Yes"
    #     }
    #     """
    #     And The Vendor must selects "Yes" button
        
#         Then The Vendor already registered his or her company to VMS portal 
    
#   #negative scenario for registration
    # Scenario: Unclick Disclaimer
    #     Given The Vendor is on VMS landing page 
    #     When The Vendor wants to register his or her company
    #     And The Vendor goes to "Registration" form 
    #     And The Vendor must fill information which needed for registration on "Registration" form
    #     """
    #     {
        
    #         "npwp" : "99.999.999.9-999.992", #format input can only filled by numeric with separator (.) and (-) pls follow the pattern
    #                                         #can only input by 15 characters numeric, if more the object locked 
    #         "namaPerusahaan"  : "PT. Abadi Jaya Sentosa Selalu",
    #         "namaPIC" : "James Bucky Barnes",
    #         "emailPICPerusahaan" : "admin@abadijaya.co.id",
    #         "noHandphonePIC" : "0812345" #field can be filled by numeric only with lenght max 20 characters if more the text cant be typed
    #     }
    #     """
    #     And The Vendor unclick "Disclaimer"
    #     And The Vendor clicks button "Daftar" 
    #     And The Vendor will see error message from the system 
    #     """
    #     {
    #         "message" : "Silahkan klik syarat dan ketentuan serta kebijakan privasi penggunaan aplikasi",
    #         "button"  : "Yes"
    #     }
    #     """
    #     And The Vendor clicks "Yes" button
    #     Then The Vendor cant continue for registration due to he or she unselect "Disclaimer"

#  #negative scenario for registration
    # Scenario: Fields Input Are Empty
    #     Given The Vendor is on VMS landing page 
    #     When The Vendor wants to register his or her company
    #     And The Vendor goes to "Registration" form 
    #     #means give empty on each input on the form
    #     And The Vendor doesnt fill anything into the form
    #     # And The Vendor clicks the "Register" button
    #     And The Vendor clicks "Disclaimer"
    #     And The Vendor clicks button "Daftar" 
    #     And The Vendor will get error message "Field tidak boleh kosong" on each object of input where found on the "Registration" Form
    #     Then The Vendor cant continue to Register due no information which given on "Registration" Form 

# #Alternate Scenario for registration, to check NPWP if NPWP already registered 
    # Scenario: NPWP already registered 
    #     Given The Vendor is on VMS landing page 
    #     When The Vendor wants to register his or her company
    #     And The Vendor goes to "Registration" form 
    #     And The Vendor must fill information which needed for registration on "Registration" form
    #     """
    #     {
        
    #         "npwp" :"99.999.999.9-999.999", #format input can only filled by numeric with separator (.) and (-) pls follow the pattern 
    #                                         #can only input by 15 characters numeric, if more the object locked 
    #         "namaPerusahaan"  : "PT. Abadi Jaya Sentosa Selalu",
    #         "namaPIC" : "James Bucky Barnes",
    #         "emailPICPerusahaan" : "admin@jayaabadi.co.id",
    #         "noHandphonePIC" : "0812345" #field can be filled by numeric only with lenght max 20 characters if more the text cant be typed
    #     }
    #     """
    #     And The Vendor put same "npwp" with registerd "npwp"
    #     And The Vendor clicks "Disclaimer"
    #     And The Vendor clicks button "Daftar" 
    #     And The Vendor will get warning message NPWP "NPWP yang anda inputkan telah terdaftar"
    #     Then The Vendor cant continue for registration due to NPWP already registered 

# #Alternate Scenario for registration, to check Email if Email already registered 
    Scenario: Email already registered
        Given The Vendor is on VMS landing page 
        When The Vendor wants to register his or her company
        And The Vendor goes to "Registration" form 
        And The Vendor must fill information which needed for registration on "Registration" form
        """
        {
        
            "npwp" :"99.999.999.9-999.999", #format input can only filled by numeric with separator (.) and (-) pls follow the pattern 
                                            #can only input by 15 characters numeric, if more the object locked 
            "namaPerusahaan"  : "PT. Abadi Jaya Sentosa Selalu",
            "namaPIC" : "James Bucky Barnes",
            "emailPICPerusahaan" : "admin@jayaabadi.co.id",
            "noHandphonePIC" : "0812345" #field can be filled by numeric only with lenght max 20 characters if more the text cant be typed
        }
        """
        And The Vendor put same "email" with registerd "email"
        And The Vendor clicks "Disclaimer"
        And The Vendor clicks button "Daftar" 
        And The Vendor will get warning message Email "Email yang anda inputkan telah terdaftar"
        Then The Vendor cant continue for registration due to NPWP already registered 