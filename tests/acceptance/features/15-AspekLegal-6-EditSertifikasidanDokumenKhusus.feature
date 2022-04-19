# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #5 - Edit Sertifikasi dan Dokumen Khusus
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" form
        When The Vendor accessing "Sertifikasi dan Dokumen Khusus Section" in "Aspek Legal" page
        And The Vendor can see the first five list of documents in "Sertifikasi dan Dokumen Khusus Grid" at "Aspek Legal" page
        When The Vendor wants to edit information regarding to "Sertifikasi dan Dokumen Khusus" on "Sertifikasi dan Dokumen Khusus Grid" which part of "Aspek Legal" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon" for "Sertifikasi dan Dokumen Khusus"
        And The Vendor see pop-up notification in front of "Sertifikasi dan Dokumen Khusus" form
            """
            {
            "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
        And The Vendor must click button "Ya" to close the pop-up notification
        And The Vendor see "Sertifikasi dan Dokumen Khusus" form fill with data from chosen row
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
        And The Vendor must click "Simpan" button where found on the "Left-bottom" of "Sertifikasi dan Dokumen Khusus" form
        And The Vendor must select "Ya" option for "Sertifikasi dan Dokumen Khusus" form
        And The Vendor see updated "Sertifikasi dan Dokumen Khusus" data in the form

#repeat process 5 to edit another "Sertifikasi dan Dokumen Khusus"
