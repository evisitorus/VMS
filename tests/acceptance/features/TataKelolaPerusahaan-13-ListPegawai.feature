# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to see list of Pegawai
    So that I can review the Pegawai data

    #10 - List Pegawai
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first ten list of data in "Pegawai Grid" at "Tata Kelola Perusahaan" page
            """
            {
                "No.   | Nama Pegawai | Tipe Karyawan | Jabatan | Bidang Pekerjaan | Resume | Action    "
                "-------------------------------------------------------"
                "1.    | Nama Pegawai | Tipe Karyawan | Jabatan | Bidang Pekerjaan | Resume | Edit, Delete"
            }
            """
        And the Vendor can click "next" to see another ten record after record of 10 from "Pegawai" on "Pegawai Grid"
        And the Vendor already see list of "Pegawai" from "Pegawai Grid"