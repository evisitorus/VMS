# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to delete one of my Korespondensi Data
    So that I can remove Korespondensi data that is not needed

    #6 - Hapus Korespondensi
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must click "Korespondensi" to expand "Korespondensi section" form
        When The Vendor accessing "Korespondensi Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "Korespondensi Grid" at "Informasi Umum" page
        When The Vendor wants to delete information regarding to "Korespondensi" on "Korespondensi Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon" for "Korespondensi"
        And The Vendor will see confirmation message
            """
            {
                "message": "Apakah 'Kantor BDV' akan dihapus dari sistem ?",
                "button": "Ya"
            }
            """
        And The Vendor must select "Ya" option for delete "Korespondensi" form
        And The Vendor will see "Korespondensi" data status is "Terhapus" in the "Korespondensi Grid" on column "action"

#repeat process 6 to delete another "Korespondensi"