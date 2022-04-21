# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to edit my korespondensi data
    So that I can request verification to upgrade my company level to vendor pro

    #5 - Edit Korespondensi
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must click "Korespondensi" to expand "Korespondensi section" form
        When The Vendor accessing "Korespondensi Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "Korespondensi Grid" at "Informasi Umum" page
        When The Vendor wants to edit information regarding to "Korespondensi" on "Korespondensi Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon" for "Korespondensi"
        And The Vendor see pop-up notification in front of "Korespondensi" form
            """
            {
                "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
            }
            """
        And The Vendor must click button "Ya" to close the pop-up notification
        And The Vendor see "Korespondensi" form fill with data from chosen row
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
        Then The Vendor must click "Simpan" button where found on the "Right-bottom" of "Korespondensi" form
        And The Vendor must select "Ya" option for "Korespondensi" form
        And The Vendor see updated "Korespondensi" data in the form

#repeat process 5 to edit another "Korespondensi"