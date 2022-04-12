# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #5 - Edit Neraca Keuangan
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Neraca Keuangan" form
        When The Vendor accessing "Neraca Keuangan Section" in "Aspek Finansial" page
        And The Vendor can see the first five list of vendors in "Neraca Keuangan Grid" at "Aspek Finansial" page
        When The Vendor wants to edit information regarding to "Neraca Keuangan" on "Neraca Keuangan Grid" which part of "Aspek Finansial" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon" for "Neraca Keuangan"
        And The Vendor see pop-up notification in front of "Neraca Keuangan" form
            """
            {
                "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
        And The Vendor must click button "Ya" to close the pop-up notification
        And The Vendor see "Neraca Keuangan" form fill with data from chosen row
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
        And The Vendor must click "Simpan" button where found on the "Left-bottom" of "Neraca Keuangan" form
        And The Vendor must select "Ya" option for "Neraca Keuangan" form
        And The Vendor see updated "Neraca Keuangan" data in the form

#repeat process 5 to edit another "Neraca Keuangan"