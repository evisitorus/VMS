# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #9 - Edit SPT
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Aspek Finansial" page
        And The Vendor must click "SPT Section" to expand
        When The Vendor accessing "SPT Section" in "Aspek Finansial" page
        And the Vendor can see the first five list of data starts with the latest in "SPT Grid" at "Aspek Finansial" page
        When The Vendor wants to edit information regarding to "SPT" on "SPT Grid" which part of "Aspek Finansial" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon"
        And The Vendor will see pop-up notification in front of "SPT" form
            """
            {
                "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
        And the Vendor must click button "Ya" to close the pop-up notification
        And The Vendor will see "SPT" form with data from chosen row
            """
            {
                "tahun"	: "2022",
                #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
                "nomorDokumen"	: "847120470910298012983",
                #jumlah karakter maksimum 24 karakter numerik jika melebihi maka objek terkunci
                "lampiran"  	: "browse file"
                #dokumen berupa pdf, png, jpg atau jpeg dengan maksimum file 2 mb
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to save information of "SPT"
        Then The Vendor must click "Simpan" button where found on the Right-bottom of "SPT" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Ubah SPT?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "SPT" data in the "SPT grid"

#repeat process 9 to edit another "SPT"