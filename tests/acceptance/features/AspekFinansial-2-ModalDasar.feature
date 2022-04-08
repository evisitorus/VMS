# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #2 - Modal Dasar
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Aspek Finansial" page
        And The Vendor must click "Modal Dasar Section" to expand
        And The Vendor will see "Modal Dasar" form
        When The Vendor wants to add information in regards to "Modal Dasar" on "Modal Dasar Section" which part of "Aspek Finansial" page
        And the Vendor must complete following inputs
            """
            {
                "modalDasarSesuaiAkta"  : "free text",
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
                "modalDitempatkanSesuaiAkta" : "free text"
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
            }
            """
        And The Vendor has fill all field
        And The Vendor wants to save information of "Modal Dasar"
        And The Vendor must click "Simpan" button where found on the Right-bottom of "Modal Dasar" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Simpan Modal Dasar?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "Modal Dasar" data in "Modal Dasar Form"
