# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to add my Company's Pengurus Perusahaan
    So that I can insert new pengurus perusahaan data

    #Alternative Scenario - Cancel Tambah Pengurus
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pengurus Perusahaan Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first five list of vendors in "Pengurus Perusahaan Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to add information regarding to "Pengurus Perusahaan" on "Pengurus Perusahaan Grid" which part of "Tata Kelola Perusahaan" page
        And The Vendor must clicks button "Tambah" where found on the Right-Top of "Pengurus Perusahaan Grid"
        And The Vendor see "Pengurus Perusahaan" form to add records regarding to "Pengurus Perusahaan"
            """
            {
                "namaDepan"		: "free text",
                "namaBelakang"		: "free text",
                "jabatan"  		: "free text",
                "noIdentitas"		: "free text",
                #jumlah karakter maksimum 16 karakter alpha-numerik jika melebihi maka objek terkunci
                "dokKartuIdentitas": "browse file",
                #format file pdf, png, atau jpg maksimal 2 mb
                "noNPWP"	: "free text",
                #jumlah karakter maksimum 15 karakter alpha-numerik jika melebihi maka objek terkunci
                "dokNPWP"	: "browse file",
                #format file pdf, png, atau jpg maksimal 2 mb
            }
            """
        When The Vendor has fill all field
        And The Vendor wants to cancel the inputted form
        And The Vendor must click "Batal" button where found on the Right-bottom of "Pemegang Saham" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Pengurus Perusahaan?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will not see "Pengurus Perusahaan" data in the "Pengurus Perusahaan grid"