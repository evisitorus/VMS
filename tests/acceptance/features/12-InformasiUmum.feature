# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #1 - Simpan / Ubah Data Perusahaan
    Scenario:
      Given The Vendor already login to VMS Portal
       When The Vendor see dashboard page
        And The Vendor wants to completing his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will shown "Data Perusahaan" form
        And The Vendor must completed following inputs where found on "Data Perusahaan" form
            """
            {
                "companyLogo" 	: "browse",
                #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb
                "apakahMemilikiNIB?"	: "pilih opsi Ya atau Tidak",
                When "Ya" is chosen then
                "NIB" : "active and can be filled",
                #jumlah karakter maksimum 10 karakter alpha-numerik jika melebihi maka objek terkunci
                When "Tidak" is chosen then
                "NIB" : "not active and cannot be filled",
                "namaPerusahaan" : "diambil dari identitas yang diinputkan vendor pada saat mendaftar",
                "inisialPerusahaan"       : "ABCD",
                #maksimum input 10 karakter, jika melebihi maka objek akan terkunci

                "jenisBadanUsaha" 		: "pilih opsi sebagai PT atau CV atau Lainnya",
                "statusBadanUsaha" 		: "pilih opsi sebagai PKP atau Non-PKP",
                "tipeBadanUsaha" 		: "pilih opsi sebagai UMKM atau Korporasi",
                "jenisKegiatanUsahaUtama" : "pilih salah satu sebagai
                Material Konstruksi; Jasa Konstruksi & Renovasi; Jasa Ekspedisi & Pengepakan; Pengadaan & Sewa Peralatan-Mesin
                Jasa Advertising; Pengadaan & Sewa Perlengkapan-Furniture; Catering & Snack; Souvenir & Merchandise; Sewa Gedung
                Pertanian & Peternakan; Pengadaan & Sewa Kendaraan; Pendidikan dan Pelatihan; Konveksi & Laundry; Jasa Travel & Akomodasi;
                Jasa Percetakan & Media; Jasa Perawatan Gedung; Jasa Perawatan Elektronik & IT; Jasa Mandor & Tenaga Kerja Lainnya; Jasa Event Organizer
                Alat Tulis Kantor; Alat & Jasa Kesehatan-Keselamatan; Bahan Kimia; Barang Elektronik, Komputer & Periferal; Jasa Konsultan & Penilaian",

                "jenisPenyediaUsaha"      : "pilih salah satu sebagai
                Principal; Distributor / Agen Utama; Sub Distributor / Sub Agen; Manufaktur; Ritel
                Perdagangan/Trading; Jasa; Lainnya"

                "NPWPPerusahaan"		: "muncul dari NPWP yang diinputkan saat melakukan registrasi"

                "bidangUsaha"             : "Data diambil dari KBLI 2020, untuk sample data bisa dicek pada laman
                https://docs.google.com/spreadsheets/d/1ru9Ti7vlt4SQ2gyYqrtWf5y2szF6UvJW/edit#gid=26338488
                Tab KBLI 2020",

                "BUMNPengampu" 			: "pilih dari salah satu yang disediakan oleh sistem,
                bisa memilih lebih dari satu BUMN, pengisian dengan cara diinput contoh PT. Pegadaian, PT. Telkom",

                "organisasiPengampu" 		: "pilih dari salah satu yang disediakan oleh sistem, bisa memilih lebih dari satu Organisasi Pengampu,
                pengisian dengan cara diinput contoh IWAPI, HIPMI",

                "websitePerusahaan"		: "www.stark-industries.co",
                #jumlah karakter maksimum 50 alpha-numerik diperbolehkan menggunakan spesial karakter (.) atau (-) jika melebihi maka objek terkunci
                "emailPerusahaan"	: "baja@yopmail.com"
            }
            """
        When The Vendor has filled all field And The Vendor wants to save information of "Data Perusahaan"
        Then The Vendor must click "Simpan" button where found on the Right-bottom of "Data Perusahaan" form
        Then The Vendor will see confirmation message
            """
            {
                "message": "Simpan profil perusahaan ?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
         And "Data Perusahaan" will be saved in the database and shown in the form

        #================================================================================================================================================
        #2 - Perbarui PIC
        When The Vendor wants to add information in regards to "PIC" on "PIC Section" which part of "Informasi Umum" page
        Then the Vendor must fill
            """
            {
                "namaPenanggungJawab"  : "Steven Rogers",
                "emailPenanggungJawab" : "randi@yopmail.com",
                "noHandphone"	  	: "0813202381209",
                #jumlah karakter maksimum 15 karakter numerik jika melebihi maka objek terkunci
            }
            """
        When The Vendor has filled all field And The Vendor wants to save information of "PIC"
        Then The Vendor must click "Perbarui" button where found on the Right-bottom of "PIC" form
        Then The Vendor will see confirmation message
            """
            {
                "message": "Perbarui PIC?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
        And "PIC" will be saved in the database and shown in the form

        #================================================================================================================================================
        #3 - List Korespondensi
        When The Vendor accessing "Korespondensi Section" in "Informasi Umum" page
         And the Vendor can view the first five list of vendors in "Korespondensi Grid" at "Informasi Umum" page
            """
            {
                "No.   | Nama Alamat | Alamat | Kota | No. Telepon | Action    "
                "-------------------------------------------------------"
                "1.    | Nama Alamat | Alamat | Kota | No.Telepon | Edit, Delete"
            }
            """
         And the Vendor can click "next" to see another five record after record of 5 from "Korespondensi" on "Korespondensi Grid"
        Then the Vendor already see list of "Korespondensi" from "Korespondensi Grid"

        #4 - Tambah Korespondensi
        When The Vendor wants to add information  in regards to "Korespondensi" on "Korespondensi Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Tambah" where found on the Right-bottom of "Korespondensi Grid" and shown "Korespondensi" form to add records regarding to "Korespondensi"
            """
            {
                "no"		: "autonumber",
                "namaAlamat"	: "Kantor Pusat",
                "alamat"  	: "Jl. Wartawan",
                "provinsi"	: "pilih provinsi dari daftar yang ditampilkan",
                "kota_kab" 	: "pilih kota/kabupaten dari daftar yang ditampilkan",
                "kecamatan"	: "pilih kecamatan dari daftar yang ditampilkan",
                "kelurahan"	: "pilih kelurahan dari daftar yang ditampilkan",
                "kodePos"	: "40221"
                "noTelepon"	: "isi kode area dan nomor telepon"
            }
            """
        When The Vendor has filled all field And The Vendor wants to save information of "Korespondensi"
        Then The Vendor must click "Simpan" button where found on the Right-bottom of "Korespondensi" form
        Then The Vendor will see confirmation message
            """
            {
                "message": "Simpan Korespondensi?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
         And "Korespondensi" data will be saved in the database and shown in the "Korespondensi grid"

        When The Vendor has filled all field And The Vendor wants to cancel the inputted form
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Korespondensi" form
        Then The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Korespondensi?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
         And the "Korespondensi" data will not be saved in the database

        #repeat process 4 to add another "Korespondensi"

        #5 - Edit Korespondensi
        When The Vendor wants to edit information in regarding to "Korespondensi" on "Korespondensi Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Edit" where found on each row of records symbolize by "pencil icon"
         And shown pop-up notification in front of "Korespondensi" form
            """
            {
                "Perubahan yang anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan anda sudah benar"
            }
            """
         And the Vendor must click button "Ya" to close the pop-up notification
         And shown "Korespondensi" form already filled with data from chosen row
            """
            {
                "no"		: "autonumber",
                "namaAlamat"	: "Kantor Pusat",
                "alamat"  	: "Jl. Wartawan",
                "provinsi"	: "pilih provinsi dari daftar yang ditampilkan",
                "kota_kab" 	: "pilih kota/kabupaten dari daftar yang ditampilkan",
                "kecamatan"	: "pilih kecamatan dari daftar yang ditampilkan",
                "kelurahan"	: "pilih kelurahan dari daftar yang ditampilkan",
                "kodePos"	: "40221"
                "noTelepon"	: "isi kode area dan nomor telepon"
            }
            """
        When The Vendor has filled all field And the Vendor wants to save information of "Korespondensi"
        Then The Vendor must click "Simpan" button where found on the Right-bottom of "Korespondensi" form
        Then The Vendor will see confirmation message
            """
            {
                "message": "Simpan Korespondensi?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
         And "Korespondensi" data will be saved in the database and shown in the "Korespondensi grid"

        When The Vendor has filled all field And The Vendor wants to cancel the inputted form
        Then The Vendor must click "Batal" button where found on the Right-bottom of "Korespondensi" form
        Then The Vendor will see confirmation message
            """
            {
                "message": "Batalkan Pengisian Korespondensi?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
         And the "Korespondensi" data will not be saved in the database

        #repeat process 5 to edit another "Korespondensi"

        #6 - Hapus Korespondensi
        When The Vendor wants to delete information in regarding to "Korespondensi" on "Korespondensi Grid" which part of "Informasi Umum" page
        Then The Vendor must clicks button "Delete" where found on each row of records symbolize by "trashbin icon"
         And shown confirmation message
            """
            {
                "message": "Apakah 'Nama Alamat' akan dihapus dari sistem?",
                "option": "Ya/Tidak"
            }
            """
        Then The Vendor must select "Ya" option
         And "Korespondensi" data will be soft-deleted from the database and the data status will be shown in the "Korespondensi grid" on column "action"

#repeat process 6 to delete another "Korespondensi"