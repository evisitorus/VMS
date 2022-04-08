# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #10 - Hapus SPT
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Aspek Finansial" page
        And The Vendor must click "SPT Section" to expand
        When The Vendor accessing "SPT Section" in "Aspek Finansial" page
        And the Vendor can see the first five list of data starts with the latest in "SPT Grid" at "Aspek Finansial" page
        When The Vendor wants to delete information regarding to "SPT" on "SPT Grid" which part of "Aspek Finansial" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon"
        And The Vendor will see confirmation message
            """
            {
                "message": "Apakah 'Tahun' akan dihapus dari sistem?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "SPT" data status as "Terhapus" in the "SPT grid" on column "action"

#repeat process 10 to delete another "SPT"
