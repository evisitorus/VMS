# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #Alternative Scenario - Tambah Neraca Keuangan
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Aspek Finansial" page
        And The Vendor must click "Neraca Keuangan Section" to expand
        When The Vendor accessing "Neraca Keuangan Section" in "Aspek Finansial" page
        And the Vendor can see the first five list of data starts with the latest in "Neraca Keuangan Grid" at "Aspek Finansial" page
        When The Vendor has filled all field
        And The Vendor wants to cancel the inputted form
        And The Vendor must click "Batal" button where found on the Right-bottom of "Neraca Keuangan" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Neraca Keuangan?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will not see "Neraca Keuangan" data in "Neraca Keuangan Grid"