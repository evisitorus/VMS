# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to cancel adding Pegawai data
    So that I can review Pegawai that works in my company
    #Alternative Scenario - Cancel Tambah Pegawai
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first ten list of data in "Pegawai Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to add information regarding to "Pegawai" on "Pegawai Grid" which part of "Tata Kelola Perusahaan" page
        And The Vendor must clicks button "Tambah" where found on the Right-Top of "Pegawai Grid"
        And The Vendor see "Pegawai" form to add records regarding to "Pegawai"
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

        When The Vendor has fill all field
        And The Vendor wants to cancel the inputted form
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Pegawai" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Pegawai?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will not see "Pegawai" data in the "Pegawai Grid"