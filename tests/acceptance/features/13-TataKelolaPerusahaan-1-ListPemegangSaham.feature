# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

  As a vendor basic
  I want to see list of my Pemegang Saham
  So that I can review the Pemegang Saham data

  #1 - List Pemegang Saham
  Scenario:
      Given The Vendor logged into VMS using his or her registered company information
      When The Vendor see dashboard page
      And The Vendor wants to complete his or her company profile
      And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
      And The Vendor will see "Pemegang Saham" form
      When The Vendor accessing "Pemegang Saham Section" in "Tata Kelola Perusahaan" page
      And The Vendor can see the first five list of vendors in "Pemegang Saham Grid" at "Tata Kelola Perusahaan" page
      """
      {
        "No.   | Nama Pemegang Saham | Jenis Pemegang Saham | Pemegang Saham Lokal/Asing | % Kepemilikan | Action    "
        "-------------------------------------------------------"
        "1.    | Nama Pemegang Saham | Jenis Pemegang Saham | Pemegang Saham Lokal/Asing | % Kepemilikan | Edit, Delete"
      }
      """
      And The Vendor can click "next" to see another five record after record of 5 from "Pemegang Saham" on "Pemegang Saham Grid"
      And The Vendor see list of "Pemegang Saham" from "Pemegang Saham Grid"