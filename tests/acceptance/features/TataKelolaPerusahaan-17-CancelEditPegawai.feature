# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to cancel editing my Pegawai data
    So that I can review Pegawai data that needs to be updated

    #Alternative Scenario - Cancel Edit Pegawai
    Scenario:
        Given The Vendor logged into VMS using his/her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to completing his/her company profile
        And The Vendor must click "Tata Kelola Perusahaan" menu which found on "Sidebar Menu"
        And The Vendor will shown "Tata Kelola Perusahaan" page
        When The Vendor accessing "Pegawai Section" in "Tata Kelola Perusahaan" page
        And the Vendor can see the first ten list of data in "Pegawai Grid" at "Tata Kelola Perusahaan" page
        When The Vendor wants to edit information regarding to "Pegawai" on "Pegawai Grid" which part of "Tata Kelola Perusahaan" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon"
        And shown pop-up notification in front of "Pegawai" form
            """
            {
                "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
        And the Vendor must click button "Ya" to close the pop-up notification
        And the Vendor see "Pegawai" form with data from chosen row
            """
            {
                "nik"		: "3453656787654355",
                #jumlah karakter maksimum 16 karakter alpha-numerik jika melebihi maka objek terkunci
                "namaDepan"		: "Randi",
                "namaBelakang"		: "Erlangga",
                "tipeKaryawan"		: "Staff Ahli",
                "jabatan"  		: "Direktur Operasional",
                "bidangPekerjaan"	: "IT",
                "dokResume": "browse file",
                #format file pdf, doc, atau docx maksimal 2 mb
            }
            """

        When The Vendor has fill all field
        And The Vendor wants to cancel the inputted form
        And The Vendor must click "Batal" button where found on the Right-bottom of "Pegawai" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Pegawai?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option
        And The Vendor will not see updated "Pegawai" data in the "Pegawai grid"