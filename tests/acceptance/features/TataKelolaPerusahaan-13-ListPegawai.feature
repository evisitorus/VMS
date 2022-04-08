# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to see list of Pegawai
    So that I can review the Pegawai data

    #10 - List Pegawai
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pegawai" form
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pegawai Grid" at "Tata Kelola Perusahaan" page
            """
            {
                "No.   | Nama Pegawai | Tipe Karyawan | Jabatan | Bidang Pekerjaan | Resume | Action    "
                "-------------------------------------------------------"
                "1.    | Nama Pegawai | Tipe Karyawan | Jabatan | Bidang Pekerjaan | Resume | Edit, Delete"
            }
            """
        And The Vendor can click "next" to see another five record after record of 5 from "Pengurus" on "Pengurus Grid"
        And The Vendor see list of "Pegawai" from "Pegawai Grid"