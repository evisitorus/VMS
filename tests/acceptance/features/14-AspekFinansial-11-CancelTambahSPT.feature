# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #Alternative Scenario - Tambah SPT
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "SPT" form
        And The Vendor must click "SPT" to expand "SPT section" form
        When The Vendor accessing "SPT Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "SPT Grid" at "Informasi Umum" page
        When The Vendor wants to add information in regards to "SPT" on "SPT Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-bottom" of "SPT Grid"
        And The Vendor will see "SPT" form to add records regarding to "SPT"
            """
            {
                "tahun"	: "free text",
                #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
                "nomorDokumen"	: "847120470910298012983",
                #jumlah karakter maksimum 24 karakter numerik jika melebihi maka objek terkunci
                "lampiran"  	: "browse file"
                #dokumen berupa pdf, png, jpg atau jpeg dengan maksimum file 2 mb
            }
            """

        When The Vendor has fill all field 
        And The Vendor wants to Cancel information of "SPT"
        Then The Vendor must click "Batal" button where found on the Right-bottom of "SPT" form
        And The Vendor will see "SPT" data in the form
