# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to edit the number of Pegawai in my Company
    So that I can give an information of total Pegawai in my company

    #9 Edit Jumlah pegawai
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Jumlah Pegawai" form
        When The Vendor accessing "Jumlah Pegawai Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Jumlah Pegawai Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to edit information regarding to "Jumlah Pegawai" on "Jumlah Pegawai Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon" for "Jumlah Pegawai"
        And The Vendor can update total of employees of "Jumlah Pegawai" form
            """
            {
                "jumlahPegawaiDomestik"	: "Active and can be filled"
                "jumlahPegawaiAsing"	: "Active and can be filled"
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to save information of "Jumlah Pegawai"
        And The Vendor must click "Simpan" button which symbolize by "Check Icon" where found on the Right-top of "Jumlah Pegawai" form
        And The Vendor must select "Ya" option for "Jumlah Pegawai" form
        And The Vendor will see "Jumlah Pegawai" in the form
        And The Vendor see the "Check Icon" change into "Pencil Icon"