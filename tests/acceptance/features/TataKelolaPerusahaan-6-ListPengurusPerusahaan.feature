# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to list of Pengurus Perusahaan
    So that I can review the Pengurus Perusahaan data

    #5 - List Pengurus Perusahaan
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pengurus Perusahaan Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first five list of vendors in "Pengurus Perusahaan Grid" at "Tata Kelola Perusahaan" page
            """
            {
            "No.   | Nama Pengurus | Jabatan | No. Identitas | Kartu Identitas | NPWP | Kartu NPWP | Action    "
            "-------------------------------------------------------"
            "1.    | Nama Pengurus | Jabatan | No. Identitas | Kartu Identitas | NPWP | Kartu NPWP | Edit, Delete"
            }
            """
        And the Vendor can click "next" to see another five record after record of 5 from "Pengurus" on "Pengurus Grid"
        And the Vendor see list of "Pengurus" from "Pengurus Grid"