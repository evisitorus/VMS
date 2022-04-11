# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to see my data completion status
    So that I can submit verification request based on my data

    #1 - Aspect List
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to see his or her completion status on each aspect
        And The Vendor must click "Pengajuan Verifikasi" menu which found on "Sidebar Menu"
        And The Vendor will see "Pengajuan Verifikasi" page
        And the Vendor can see the aspect of verification process
            """
            {
                "Informasi Umum": "checked/unchecked with date",
                "Tata Kelola Perusahaan": "checked/unchecked with date",
                "Aspek Finansial": "checked/unchecked with date",
                "Aspek Legal": "checked/unchecked with date",
                "Riwayat Pekerjaan": "checked/unchecked with date"
            }
            """
        And the Vendor can see the "Ajukan Verifikasi" button on the right-bottom of the page
