# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to delete my Company's Pengurus Perusahaan
    So that I can remove non active Pengurus Perusahaan

    #8 - Hapus Pengurus Perusahaan
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pengurus Perusahaan Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first five list of data in "Pengurus Perusahaan Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to delete information regarding to "Pengurus Perusahaan" on "Pengurus Perusahaan Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon"
        And The Vendor see confirmation message
            """
            {
                "message": "Apakah 'Nama Pengurus' akan dihapus dari sistem?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "Pengurus Perusahaan" data status is "Terhapus" in the "Pengurus Perusahaan Grid" on column "action"

#repeat process 8 to delete another "Pengurus Perusahaan"