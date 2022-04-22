# language: en
# workflow

Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to complete my data perusahaan information
    So that I can request verification to upgrade my company level to vendor pro

    #Alternative Scenario, NIB is Empty
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Informasi Umum" menu which found on "Sidebar Menu"
        And The Vendor will see "Data Perusahaan" form
        And The Vendor must complete following inputs where found on "Data Perusahaan" form without NIB
            """
            {
                "companyLogo" 	: "browse",
                #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb
                "apakahMemilikiNIB?"	: "Tidak",
                "NIB" : "not active and can not be filled",
                "namaPerusahaan" : "diambil dari identitas yang diinputkan vendor pada saat mendaftar",
                "inisialPerusahaan"       : "ABCD",
                #maksimum input 10 karakter, jika melebihi maka objek akan terkunci
                "jenisBadanUsaha" 		: "pilih opsi sebagai PT atau CV atau Lainnya",
                "statusBadanUsaha" 		: "pilih opsi sebagai PKP atau Non-PKP",
                "tipeBadanUsaha" 		: "pilih opsi sebagai UMKM atau Korporasi",
                "jenisKegiatanUsahaUtama" : "pilih salah satu sebagai
                Material Konstruksi; Jasa Konstruksi & Renovasi; Jasa Ekspedisi & Pengepakan; Pengadaan & Sewa Peralatan-Mesin; Jasa Advertising; Pengadaan & Sewa Perlengkapan-Furniture; Catering & Snack; Souvenir & Merchandise; Sewa Gedung; Pertanian & Peternakan; Pengadaan & Sewa Kendaraan; Pendidikan dan Pelatihan; Konveksi & Laundry; Jasa Travel & Akomodasi; Jasa Percetakan & Media; Jasa Perawatan Gedung; Jasa Perawatan Elektronik & IT; Jasa Mandor & Tenaga Kerja Lainnya; Jasa Event Organizer; Alat Tulis Kantor; Alat & Jasa Kesehatan-Keselamatan; Bahan Kimia; Barang Elektronik, Komputer & Periferal; Jasa Konsultan & Penilaian",
                "jenisPenyediaUsaha"      : "pilih salah satu sebagai
                Principal; Distributor / Agen Utama; Sub Distributor / Sub Agen; Manufaktur; Ritel; Perdagangan/Trading; Jasa; Lainnya",
                "NPWPPerusahaan"		: "tampilkan NPWP yang diinputkan saat melakukan registrasi",
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
        When The Vendor has fill all field 
        And The Vendor wants to save information of "Data Perusahaan"
        Then The Vendor must click "Simpan" button where found on the "Right-bottom" of "Data Perusahaan" form
        And The Vendor will see confirmation message
            """
            {
                "message": "Simpan profil perusahaan ?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor must select "Ya" option for "Data Perusahaan" form
        And The Vendor will see "Data Perusahaan" data in the form