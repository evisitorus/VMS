# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to cancel adding new korespondensi information
    So that I can review my korespondensi information

    #Alternative Scenario - Cancel Tambah Korespondensi
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his/her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must click "Korespondensi" to expand "Korespondensi section"
        When The Vendor accessing "Korespondensi Section" in "Informasi Umum" page
        Then the Vendor can see the first five list of vendors in "Korespondensi Grid" at "Informasi Umum" page
        When The Vendor has fill all field And The Vendor wants to cancel the inputted form
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Korespondensi" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Korespondensi?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will be back to "Korespondensi Grid"
        And The Vendor will not see the "Korespondensi" data in "Korespondensi Grid"