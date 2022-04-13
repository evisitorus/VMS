# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to add my Company's Pemegang Saham
    So that I can review the Pemegang Saham data

    #3 - Edit Pemegang Saham
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pemegang Saham" form
        When The Vendor accessing "Pemegang Saham Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pemegang Saham Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to edit information regarding to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon"
        And The Vendor see pop-up notification in front of "Pemegang Saham" form
            """
            {
                "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
            }
            """
        And The Vendor must click button "Ya" to close the pop-up notification
        And The Vendor see "Pemegang Saham" form fill with data from chosen row
            """
            {
                "no": "autonumber",
                "namaPemegangSaham": "Randi",
                "jenisPemegangSaham": "pilih opsi perseorangan atau badan usaha",
                "pemegangSaham": "pilih opsi lokal atau asing",
                "prosentaseKepemilikan": "30%"
            }
            """
        When The Vendor has fill all field 
        And The Vendor wants to Cancel information of "Pemegang Saham"
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Pemegang Saham" form
        And The Vendor will see "Pemegang Saham" data in the form

#repeat process 3 to edit another "Pemegang Saham"