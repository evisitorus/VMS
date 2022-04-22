# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #3 - List Neraca Keuangan
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Finansial" menu which found on "Sidebar Menu"
        And The Vendor must click "Neraca Keuangan Section" to expand "Neraca Keuangan" form
        When The Vendor accessing "Neraca Keuangan Section" in "Aspek Finansial" page
        And The Vendor can see the first five list of vendors in "Neraca Keuangan Grid" at "Aspek Finansial" page
            """
            {
                "Tahun | Aktiva | Passiva (Liability) | Ekuitas (Equity) | Omzet Bersih | Action    "
                "-------------------------------------------------------"
                "Tahun | Aktiva | Passiva (Liability) | Ekuitas (Equity) | Omzet Bersih | Edit, Delete"
            }
            """
        And The Vendor can click "next" to see another five record after record of 5 from "Neraca Keuangan" on "Neraca Keuangan Grid"
        And The Vendor see list of "Neraca Keuangan" from "Neraca Keuangan Grid"