# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile 

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded

    Background: 
        Given The Vendor already login to VMS Portal

    Scenario: Edit PIC Information 
        Given The Vendor wants to edit several data from his/her company information 
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The The Vendor must click "PIC" Tab 
        And The The Vendor will see "Akun PIC" form
        And The Vendor must click button "Edit" button where found on the right-buttom of the "PIC" form 
        And The Vendor will see information which state for every changes should be re-check by verificator
        """
        {
            "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The Vendor will see information details from recorded data
        """
        {
            "avatar"       : "browse",
                            #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
            "email"        : "be.visible; state : disabled",          
            "noHandphone"  : "be.visible",  
            "password"		: "be.visible"
        }
        """
        And The Vendor wants to change their password 
        And The Vendor must define new password on "PIC" form 
        """
        {
            "avatar"             : "browse",
                                    #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
            "email"              : "be.visible; state : disabled",          
            "noHandphone"        : "be.visible",  
            "password"			  : "be.visible",
            "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
                                #if user input more than 15 chars, input type locked
            "repeatNewPassword   : "P0intBreak!23"
        }
        """
        And The The Vendor must click "Simpan" button where found on the left-buttom of "Akun PIC" form 
        And The The Vendor will see confirmation message 
        """
        {
        
            "message" : "Simpan perubahan pada PIC Perusahaan ?",
            "option"  : "Yes/No""
        }
        """
        And The The Vendor must select "Yes" option 
        And The Vendor must select "Yes" option 
        Then The Vendor already modify company information which has been recorded

    #edit PIC
    Scenario : Edit PIC Avatar not in jpg / jpeg / png extension  
    Given The Vendor already login into VMS using his/her registered company information
        When The Vendor wants to edit several data from his/her company information 
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The The Vendor must click "PIC" Tab 
        And The The Vendor will see "Akun PIC" form
        And The Vendor must click "Edit" button where found on the right-buttom of the "PIC" form 
        And The The Vendor will see information which state for every changes should be re-check by verificator on the top of the "PIC" form 
        """
        {
            "label" : "Perhatian :Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The The Vendor define avatar not in jpg / jpeg / png extension 
        """
        {
            "avatar"             : "browse",
                                    #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
            "email"              : "be.visible; state : disabled",          
            "noHandphone"        : "be.visible",  
            "password"			  : "be.visible",
            "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
                                #if user input more than 15 chars, input type locked
            "repeatNewPassword   : "P0intBreak!23"
        }
        """
        And The The Vendor will warning message tooltip on avatar input as "Image harus berformat jpg, jpeg atau png" 
        Then The The Vendor can't continue to process saving data of "Akun PIC" due not suitable format on avatar 
        
    #edit PIC
    Scenario: Avatar size more than 2 MB 
        Given The Vendor already login into VMS using his/her registered company information
        When The Vendor wants to edit several data from his/her company information 
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The The Vendor must click "PIC" Tab 
        And The The Vendor will see "Akun PIC" form
        And The Vendor must click "Edit" button where found on the right-buttom of the "PIC" form 
        And The The Vendor will see information which state for every changes should be re-check by verificator on the top of the "PIC" form 
        """
        {
            "label" : "Perhatian :Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The The Vendor define avatar with size more than 2 MB 
        """
        {
            "avatar"             : "browse",
                                    #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
            "email"              : "be.visible; state : disabled",          
            "noHandphone"        : "be.visible",  
            "password"			  : "be.visible",
            "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
                                #if user input more than 15 chars, input type locked
            "repeatNewPassword   : "P0intBreak!23"
        }
        """
        And The The Vendor will warning message tooltip on avatar input as "Ukuran Image maksimal 2 MB" 
        Then The The Vendor can't continue to process saving data of "Akun PIC" due not suitable format on avatar 
        
    #edit PIC
    Scenario: Repeat new password not the same with new password 
        Given The Vendor already login into VMS using his/her registered company information
        When The Vendor wants to edit several data from his/her company information 
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The The Vendor must click "PIC" Tab 
        And The The Vendor will see "Akun PIC" form
        And The Vendor must click "Edit" button where found on the right-buttom of the "PIC" form 
        And The The Vendor will see information which state for every changes should be re-check by verificator on the top of the "PIC" form 
        """
        {
            "label" : "Perhatian :Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The The Vendor define new password not the same with new password 
        """
        {
            "avatar"             : "browse",
                                    #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
            "email"              : "be.visible; state : disabled",          
            "noHandphone"        : "be.visible",  
            "password"			  : "be.visible",
            "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
                                    #if user input more than 15 chars, input type locked
            "repeatNewPassword   : "P0intBreak!2"
        }
        """
        And The Vendor must clicks "Simpan" button 
        And The The Vendor will see warning message 
        """
        {
            "message" : "Password baru tidak sesuai!." 
            "option"  : "Yes"
        }
        """
        And The Vendor must click button "Yes" 
        Then The The Vendor can't continue to process saving data of "Akun PIC" due repeat new password not the same with new password  

    #edit PIC
    Scenario: Repeat new password same with old password 
        Given The Vendor already login into VMS using his/her registered company information
        When The Vendor wants to edit several data from his/her company information 
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The The Vendor must click "PIC" Tab 
        And The The Vendor will see "Akun PIC" form
        And The Vendor must click "Edit" button where found on the right-buttom of the "PIC" form 
        And The The Vendor will see information which state for every changes should be re-check by verificator on the top of the "PIC" form 
        """
        {
            "label" : "Perhatian :Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The The Vendor define new password not the same with new password 
        """
        {
            "avatar"             : "browse",
                                    #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
            "email"              : "be.visible; state : disabled",          
            "noHandphone"        : "be.visible",  
            "password"			  : "be.visible",
            "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
                                    #if user input more than 15 chars, input type locked
            "repeatNewPassword   : "P0intBreak!23"
        }
        """
        And The Vendor must clicks "Simpan" button 
        And The The Vendor will see warning message 
        """
        {
            "message" : "Password baru tidak boleh sama dengan password lama!." 
            "option"  : "Yes"
        }
        """
        And The Vendor must click button "Yes" 
        Then The The Vendor can't continue to process saving data of "Akun PIC" due repeat new password not the same with new password