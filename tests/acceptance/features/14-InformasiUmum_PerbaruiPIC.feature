# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to complete my PIC information
    So that I can request verification to upgrade my company level to vendor pro

    #2 - Perbarui PIC
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must click "PIC section" to expand "PIC" form
        When The Vendor wants to add information in regards to "PIC" on "PIC Section" which part of "Informasi Umum" page
        Then the Vendor must fill
            """
            {
                "namaPenanggungJawab"  : "Steven Rogers",
                "emailPenanggungJawab" : "randi@yopmail.com",
                "noHandphone"	  	: "0813202381209",
                #jumlah karakter maksimum 15 karakter numerik jika melebihi maka objek terkunci
            }
            """
        When The Vendor has fill all field 
         And The Vendor wants to save information of "PIC"
        Then The Vendor must click "Simpan" button where found on the Right-bottom of "PIC" form
         And The Vendor will see confirmation message
            """
            {
                "message": "Simpan perubahan data PIC Perusahaan?",
                "button" : "Ya"
            }
            """
         And The Vendor must select "Ya" option for "PIC" form
         And The Vendor will see "PIC" data in the form