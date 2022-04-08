# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to delete my Company's Pemegang Saham
    So that I can remove non active Pemegang Saham

    #4 - Hapus Pemegang Saham
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pemegang Saham" form
        When The Vendor accessing "Pemegang Saham Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pemegang Saham Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to delete information regarding to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon" for "Pemegang Saham"
        And The Vendor will see delete confirmation message
            """
            {
                "message": " Apakah Pemegang Saham atas nama "John" akan dihapus dari sistem ? ",
            }
            """
        And The Vendor must select "Ya" option for "Pemegang Saham" form
        And The Vendor will see "Pemegang Saham" data status is "Terhapus" in the "Pemegang Saham Grid" on column "action"

#repeat process 4 to delete another "Pemegang Saham"