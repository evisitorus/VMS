# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro


    #6 - Hapus Sertifikasi dan Dokumen Khusus
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" form
        And The Vendor must click "Sertifikasi dan Dokumen Khusus" to expand "Sertifikasi dan Dokumen Khusus section" form
        When The Vendor accessing "Sertifikasi dan Dokumen Khusus Section" in "Aspek Legal" page
        Then The Vendor can see the first five list of documents in "Sertifikasi dan Dokumen Khusus Grid" at "Aspek Legal" page
        When The Vendor wants to delete information regarding to "Sertifikasi dan Dokumen Khusus" on "Sertifikasi dan Dokumen Khusus Grid" which part of "Aspek Legal" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon" for "Sertifikasi dan Dokumen Khusus"
        And The Vendor will see confirmation message
            """
            {
                "message": "Apakah 'Nama Dokumen' akan dihapus dari sistem?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option for delete "Sertifikasi dan Dokumen Khusus" form
        And The Vendor will see "Sertifikasi dan Dokumen Khusus" data status is "Terhapus" in the "Sertifikasi dan Dokumen Khusus Grid" on column "action"

#repeat process 6 to delete another "Sertifikasi dan Dokumen Khusus"