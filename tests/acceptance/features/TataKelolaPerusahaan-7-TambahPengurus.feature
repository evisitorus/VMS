# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to add my Company's Pengurus Perusahaan
    So that I can insert new pengurus perusahaan data

    #6 - Tambah Pimpinan & Pengurus Perusahaan
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pengurus Perusahaan" form
        When The Vendor accessing "Pengurus Perusahaan Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pengurus Perusahaan Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to add information in regards to "Pengurus Perusahaan" on "Pengurus Perusahaan Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-Top" of "Pengurus Perusahaan Grid"
        And The Vendor will see "Pengurus Perusahaan" form to add records regarding to "Pengurus Perusahaan"
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
        And The Vendor has fill all field
        And The Vendor wants to save information of "Pengurus Perusahaan"
        And The Vendor must click "Simpan" button where found on the "Left-bottom" of "Pengurus Perusahaan" form
        And The Vendor must select "Ya" option for "Pengurus Perusahaan" form
        And The Vendor will see "Pengurus Perusahaan" data in the form

#repeat process 6 to add another "Pengurus Perusahaan"