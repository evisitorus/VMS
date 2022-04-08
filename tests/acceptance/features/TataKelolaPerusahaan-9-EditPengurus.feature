# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to edit my Company's Pengurus Perusahaan
    So that I can update pengurus perusahaan data to request verification

    #7 - Edit Pengurus Perusahaan
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pengurus Perusahaan Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first five list of vendors in "Pengurus Perusahaan Grid" at "Tata Kelola Perusahaan" page

        When The Vendor wants to edit information in regarding to "Pengurus Perusahaan" on "Pengurus Perusahaan Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon"
        And The Vendor see pop-up notification in front of "Pengurus Perusahaan" form
            """
            {
                "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
        And the Vendor must click button "Ya" to close the pop-up notification
        And The Vendor see "Pengurus Perusahaan" form with data from chosen row
            """
            {
                "namaDepan"		: "Randi",
                "namaBelakang"		: "Erlangga",
                "jabatan"  		: "Direktur Utama",
                "noIdentitas"		: "3271949191920012",
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
        And The Vendor wants to save information of "Pengurus Perusahaan"
        Then The Vendor must click "Simpan" button where found on the Left-bottom of "Pengurus Perusahaan" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Simpan Pengurus Perusahaan?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor see updated "Pengurus Perusahaan" data in the "Pengurus Perusahaan grid"

#repeat process 7 to edit another "Pengurus Perusahaan"