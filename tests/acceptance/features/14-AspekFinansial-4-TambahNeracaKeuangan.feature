# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #4 - Tambah Neraca Keuangan
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Neraca Keuangan" form
        And The Vendor must click "Neraca Keuangan" to expand "Neraca Keuangan section" form
        When The Vendor accessing "Neraca Keuangan Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "Neraca Keuangan Grid" at "Informasi Umum" page
        When The Vendor wants to add information in regards to "Neraca Keuangan" on "Neraca Keuangan Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-bottom" of "Neraca Keuangan Grid"
        And The Vendor will see "Neraca Keuangan" form to add records regarding to "Neraca Keuangan"
            """
            {
                "tahun"	: "free text",
                #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
                "aktiva"	: "800000000",
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
                "pasiva"  	: "800000000",
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
                "ekuitas"	: "800000000",
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
                "omzetBersih" 	: "800000000",
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
                "dokLaporanKeuangan"	: "browse file"
                #dokumen harus berupa pdf dengan maksimum file 2 mb
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to save information of "Neraca Keuangan"
        Then The Vendor must click "Simpan" button where found on the "Right-bottom" of "Neraca Keuangan" form
        And The Vendor must select "Ya" option for "Neraca Keuangan" form
        And The Vendor will see "Neraca Keuangan" data in the form

#repeat process 4 to add another "Neraca Keuangan"