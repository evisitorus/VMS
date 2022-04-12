# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #Alternative Scenario - Tambah Sertifikasi dan Dokumen Khusus
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" form
        And The Vendor must click "Sertifikasi dan Dokumen Khusus" to expand "Sertifikasi dan Dokumen Khusus section" form
        When The Vendor accessing "Sertifikasi dan Dokumen Khusus Section" in "Aspek Legal" page
        Then The Vendor can see the first five list of documents in "Sertifikasi dan Dokumen Khusus Grid" at "Aspek Legal" page
        When The Vendor wants to add information in regards to "Sertifikasi dan Dokumen Khusus" on "Sertifikasi dan Dokumen Khusus Grid" which part of "Aspek Legal" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-bottom" of "Sertifikasi dan Dokumen Khusus Grid"
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" form to add records regarding to "Sertifikasi dan Dokumen Khusus"
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
        And The Vendor wants to Cancel information of "Sertifikasi dan Dokumen Khusus"
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Sertifikasi dan Dokumen Khusus" form
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" data in the form
