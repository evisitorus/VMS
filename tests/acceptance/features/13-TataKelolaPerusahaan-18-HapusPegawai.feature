# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to delete my Company's Pegawai
    So that I can remove non active Pegawai

    #13 - Hapus Pegawai
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pegawai" form
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pegawai Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to delete information regarding to "Pegawai" on "Pegawai Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon" for "Pegawai"
        And The Vendor will see delete confirmation message
            """
            {
                "message": "Apakah 'Nama Pegawai' akan dihapus dari sistem?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option for delete "Pegawai" form
        And The Vendor will see "Pegawai" data status is "Terhapus" in the "Pegawai Grid" on column "action"

#repeat process 13 to delete another "Pegawai"