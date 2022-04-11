# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #4 - Tambah Sertifikasi dan Dokumen Khusus
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his/her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor click "Sertifikasi dan Dokumen Khusus section" to expand
        When The Vendor accessing "Sertifikasi dan Dokumen Khusus Section" in "Aspek Legal" page
        And the Vendor can see the first five list of documents in "Sertifikasi dan Dokumen Khusus Grid" at "Aspek Legal" page
        When The Vendor wants to add information regarding to "Sertifikasi dan Dokumen Khusus" on "Sertifikasi dan Dokumen Khusus Grid" which part of "Aspek Legal" page
        Then The Vendor must clicks button "Tambah" where found on the Right-bottom of "Sertifikasi dan Dokumen Khusus Grid"
            and The Vendor will see "Sertifikasi dan Dokumen Khusus" form to add records regarding to "Sertifikasi dan Dokumen Khusus"
            """
            {
                "no": "autonumber",
                "namaDokumen": "SIUJK",
                "tanggalTerbit": "27 Juli 2021",
                "tanggalExpire": "27 Juli 2022",
                "namaFile": "siujk.pdf"
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to save information of "Sertifikasi dan Dokumen Khusus"
        Then The Vendor must click "Simpan" button where found on the Right-bottom of "Sertifikasi dan Dokumen Khusus" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Simpan Sertifikasi dan Dokumen Khusus?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" data in the "Sertifikasi dan Dokumen Khusus grid"

#repeat process 4 to add another "Sertifikasi dan Dokumen Khusus"
