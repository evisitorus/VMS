# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #11 - List Asset
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor must click "Asset Section" to expand "Asset" form
        When The Vendor accessing "Asset Section" in "Aspek Finansial" page
        And The Vendor can see the first five list of vendors in "Asset Grid" at "Aspek Finansial" page
            """
            {
                "No. | Nama Asset | Jumlah (Unit) | Estimasi Nilai Asset | Tahun Perolehan | Action    "
                "-------------------------------------------------------"
                "No. | Nama Asset | Jumlah (Unit) | Estimasi Nilai Asset | Tahun Perolehan | Edit, Delete"
            }
            """
        And The Vendor can click "next" to see another five record after record of 5 from "Asset" on "Asset Grid"
        And The Vendor see list of "Asset" from "Asset Grid"