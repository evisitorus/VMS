# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to cancel adding new korespondensi information
    So that I can review my korespondensi information

    #Alternative Scenario - Cancel Tambah Korespondensi
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must click "Korespondensi" to expand "Korespondensi section" form
        When The Vendor accessing "Korespondensi Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "Korespondensi Grid" at "Informasi Umum" page
        When The Vendor wants to add information in regards to "Korespondensi" on "Korespondensi Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Tambah" where found on the Right-bottom of "Korespondensi Grid"
        And The Vendor will see "Korespondensi" form to add records regarding to "Korespondensi"
            """
            {
                "no"		: "autonumber",
                "namaAlamat"	: "Kantor Pusat",
                "alamat"  	: "Jl. Wartawan",
                "provinsi"	: "pilih provinsi dari daftar yang ditampilkan",
                "kota_kab" 	: "pilih kota/kabupaten dari daftar yang ditampilkan",
                "kecamatan"	: "pilih kecamatan dari daftar yang ditampilkan",
                "kelurahan"	: "pilih kelurahan dari daftar yang ditampilkan",
                "kodePos"	: "40221"
                "noTelepon"	: "isi kode area dan nomor telepon"
            }
            """
        When The Vendor has fill all field
        And The Vendor wants to save information of "Korespondensi"
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Korespondensi" form
        And The Vendor will be back to "Korespondensi Grid"
        And The Vendor will not see the "Korespondensi" data in "Korespondensi Grid"
