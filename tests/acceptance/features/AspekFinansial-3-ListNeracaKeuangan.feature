# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #3 - List Neraca Keuangan
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor will see "Aspek Finansial" page
        And The Vendor must click "Neraca Keuangan Section" to expand
        When The Vendor accessing "Neraca Keuangan Section" in "Aspek Finansial" page
        And the Vendor can see the first five list of data starts with the latest in "Neraca Keuangan Grid" at "Aspek Finansial" page
            """
            {
                "Tahun | Aktiva | Passiva (Liability) | Ekuitas (Equity) | Omzet Bersih | Action    "
                "-------------------------------------------------------"
                "Tahun | Aktiva | Passiva (Liability) | Ekuitas (Equity) | Omzet Bersih | Edit, Delete"
            }
            """
        And the Vendor can click "next" to see another five record after record of 5 from "Neraca Keuangan" on "Neraca Keuangan Grid"
        And the Vendor will see list of "Neraca Keuangan" from "Neraca Keuangan Grid"