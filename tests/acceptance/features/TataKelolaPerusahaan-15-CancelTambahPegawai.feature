# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to add Pegawai data
    So that I can insert new Pegawai that works in my company

    #11 - Tambah Pegawai
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will see "Pegawai" form
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page
        And The Vendor can see the first five list of vendors in "Pegawai Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Tambah" where found on the "Right-Top" of "Pegawai Grid"
        And The Vendor will see "Pegawai" form to add records regarding to "Pegawai"
            """
            {
                "nik"		: "free text",
                #jumlah karakter maksimum 16 karakter alpha-numerik jika melebihi maka objek terkunci
                "namaDepan"		: "free text",
                "namaBelakang"		: "free text",
                "tipeKaryawan"		: "pilih tipe karyawan dari dropdown",
                "jabatan"  		: "free text",
                "bidangPekerjaan"	: "pilih bidang pekerjaan dari daftar",
                "dokResume": "browse file",
                #format file pdf, doc, atau docx maksimal 2 mb
            }
            """

        And The Vendor has fill all field
        And The Vendor wants to Cancel information of "Pegawai"
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Pegawai" form
        And The Vendor will be back to "Pegawai Grid"
        And The Vendor will not see the "Pegawai" data in "Pegawai grid"

#repeat process 11 to add another "Pegawai"