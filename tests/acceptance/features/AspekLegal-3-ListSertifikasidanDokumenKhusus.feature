# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #3 - List Sertifikasi dan Dokumen Khusus
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his/her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor click "Sertifikasi dan Dokumen Khusus section" to expand
        When The Vendor accessing "Sertifikasi dan Dokumen Khusus Section" in "Aspek Legal" page
        And the Vendor can see the first five list of documents in "Sertifikasi dan Dokumen Khusus Grid" at "Aspek Legal" page
            """
            {
                "No.   | Nama Dokumen | Tanggal Terbit | Tanggal Expired | Nama File | Action    "
                "-------------------------------------------------------"
                "1.    | Nama Dokumen | Tanggal Terbit | Tanggal Expired | Nama File | Edit, Delete"
            }
            """
        And the Vendor can click "next" to see another five record after record of 5 from "Sertifikasi dan Dokumen Khusus" on "Sertifikasi dan Dokumen Khusus Grid"
        Then the Vendor will see list of "Sertifikasi dan Dokumen Khusus" from "Sertifikasi dan Dokumen Khusus Grid"
