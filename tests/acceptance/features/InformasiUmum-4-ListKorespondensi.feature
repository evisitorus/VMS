# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to see list of my company korespondensi data
    So that I can add, edit or delete the data

    #3 - List Korespondensi
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must click "Korespondensi" to expand "Korespondensi section" form
        When The Vendor accessing "Korespondensi Section" in "Informasi Umum" page
        Then The Vendor can see the first five list of vendors in "Korespondensi Grid" at "Informasi Umum" page
            """
            {
                "No.   | Nama Alamat | Alamat | Kota | No. Telepon | Action    "
                "-------------------------------------------------------"
                "1.    | Nama Alamat | Alamat | Kota | No.Telepon | Edit, Delete"
            }
            """
        And The Vendor can click "next" to see another five record after record of 5 from "Korespondensi" on "Korespondensi Grid"
        And The Vendor see list of "Korespondensi" from "Korespondensi Grid"