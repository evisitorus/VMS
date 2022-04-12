# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #Alternative Scenario - Cancel Edit Asset
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Asset" form
        When The Vendor accessing "Asset Section" in "Aspek Finansial" page
        And The Vendor can see the first five list of vendors in "Asset Grid" at "Aspek Finansial" page
        When The Vendor wants to edit information regarding to "Asset" on "Asset Grid" which part of "Aspek Finansial" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon" for "Asset"
        And The Vendor see pop-up notification in front of "Asset" form
            """
            {
                "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
        And The Vendor must click button "Ya" to close the pop-up notification
        And The Vendor see "Asset" form fill with data from chosen row
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
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Asset" form
        And The Vendor will see "Asset" data in the form

