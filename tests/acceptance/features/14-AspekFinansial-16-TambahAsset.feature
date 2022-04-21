# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #12 - Tambah Asset
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Asset" form
        And The Vendor must click "Asset" to expand "Asset section" form
        When The Vendor accessing "Asset Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "Asset Grid" at "Informasi Umum" page
        When The Vendor wants to add information in regards to "Asset" on "Asset Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-bottom" of "Asset Grid"
        And The Vendor will see "Asset" form to add records regarding to "Asset"
            """
            {
                "No."	: "autoNumber",
                "namaAsset"	: "Tanah dan Bangunan",
                "jumlahUnit"	: "100 m2",
                "estimasiNilai": "250000000",
                #jumlah karakter maksimum 18 karakter numerik jika melebihi maka objek terkunci
                "tahunPerolehan"  	: "1999"
                #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to save information of "Asset"
        Then The Vendor must click "Simpan" button where found on the "Right-bottom" of "Asset" form
        And The Vendor must select "Ya" option for "Asset" form
        And The Vendor will see "Asset" data in the form

#repeat process 12 to add another "Asset"
