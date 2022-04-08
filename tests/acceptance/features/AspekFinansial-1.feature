# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #1 - Simpan Bank
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Aspek Finansial" page
        And The Vendor must complete following inputs where found on "Bank" form
            """
            {
                "namaBank": "free text",
                "cabang": "free text",
                "nomorRekening": "free text",
                "namaPemilikRekening": "free text"
            }
            """
        And The Vendor has fill all field
        And The Vendor wants to save information of "Bank"
        And The Vendor must click "Simpan" button where found on the Right-bottom of "Bank" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Simpan Bank?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "Bank" data in the "Bank Form"
