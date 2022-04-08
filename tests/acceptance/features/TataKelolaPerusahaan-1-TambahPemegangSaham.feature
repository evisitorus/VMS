# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to add my Company's Pemegang Saham
    So that I can insert new Pemegang Saham Data

    #2 - Tambah Pemegang Saham
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pemegang Saham" form
        When The Vendor accessing "Pemegang Saham Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pemegang Saham Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to add information in regards to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-Top" of "Pemegang Saham Grid"
        And The Vendor will see "Pemegang Saham" form to add records regarding to "Pemegang Saham"
            """
            {
                "no": "autonumber",
                "namaPemegangSaham": "Randi",
                "jenisPemegangSaham": "pilih opsi perseorangan atau badan usaha",
                "pemegangSaham": "pilih opsi lokal atau asing",
                "prosentaseKepemilikan": "30%"
            }
            """
        And The Vendor has fill all field
        And The Vendor wants to save information of "Pemegang Saham"
        And The Vendor must click "Simpan" button where found on the "Left-bottom" of "Pemegang Saham" form
        # And The Vendor will see confirmation message
        #     """
        #     {
        #         "message": "Simpan Pemegang Saham?",
        #         "option": "Ya/Tidak"
        #     }
        #     """
        And The Vendor must select "Ya" option for "Pemegang Saham" form
        And The Vendor will see "Pemegang Saham" data in the form

#repeat process 2 to add another "Pemegang Saham"