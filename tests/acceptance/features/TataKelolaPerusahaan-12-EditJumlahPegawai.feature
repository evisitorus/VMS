# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to edit the number of Pegawai in my Company
    So that I can give an information of total Pegawai in my company

    #9 Edit Jumlah pegawai
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page

        When the Vendor wants to edit information regarding to "Jumlah Pegawai Domestik" and "Jumlah Pegawai Asing" on "Jumlah Pegawai" form which part of "Tata Kelola Perusahaan" page
        Then the Vendor must click button "Edit" which symbolize by "Pencil icon" where found on the right-top of "Jumlah Pegawai" form and change the icon to "Check icon"
            """
            {
                "jumlahPegawaiDomestik"	: "Active and can be filled"
                "jumlahPegawaiAsing"	: "Active and can be filled"
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to save information of "Jumlah Pegawai"
        And The Vendor must click "Simpan" button which symbolize by "Check Icon" where found on the Right-top of "Jumlah Pegawai" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Apakah Jumlah Pegawai sudah sesuai?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "Jumlah Pegawai" in the form
        And The Vendor see the "Check Icon" change into "Pencil Icon"