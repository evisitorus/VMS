# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to delete my Company's Pengurus Perusahaan
    So that I can remove non active Pengurus Perusahaan

    #4 - Hapus Pengurus Perusahaan
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pengurus Perusahaan" form
        When The Vendor accessing "Pengurus Perusahaan Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pengurus Perusahaan Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to delete information regarding to "Pengurus Perusahaan" on "Pengurus Perusahaan Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon" for "Pengurus Perusahaan"
        And The Vendor will see delete confirmation message
            """
            {
                "message": " Apakah Pengurus Perusahaan atas nama "John" akan dihapus dari sistem ? ",
            }
            """
        And The Vendor must select "Ya" option for delete "Pengurus Perusahaan" form
        And The Vendor will see "Pengurus Perusahaan" data status is "Terhapus" in the "Pengurus Perusahaan Grid" on column "action"

#repeat process 4 to delete another "Pengurus Perusahaan"