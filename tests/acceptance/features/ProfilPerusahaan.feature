# language: en
# workflow
Feature: Vendor Basic - Completed vendor information - Company Profile 

  As a vendor basic 
  I want to completed company information
  So that I can upgrade my company level to vendor pro

  Background: 
    Given The Vendor already login to VMS Portal with new account

  #manage company profile 
    Scenario: Positif Scenario for company profile 
      Given The Vendor gets his or her badge on his or her vendor level on "Vendor Dashboard" as 
        """
        {
            "vendorLevel"  : "Vendor Basic",
            "progressLevel : "95% menuju Vendor Pro"
            "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
        }
        """ 
        And The Vendor wants to completed his or her company profile
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The Vendor must click "Profil Perusahaan" Tab 
        And The Vendor will see "Informasi Perusahaan" form
        And The Vendor wants to add information in regards to "Data Perusahaan" on "Data Perusahaan Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must completed following inputs where found on "Informasi Perusahaan" form 
        """
        {
        
            "companyLogo" 			: "browse", 
                                        #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb
                                        
            "namaPerusahaan" 			: "diambil dari identitas yang diinputkan vendor pada saat mendaftar", 
            "inisialPerusahaan"       : "ABCD", 
                                        #maksimum input 10 karakter, jika melebihi maka objek akan terkunci
                                        
            "jenisBadanUsaha" 		: "pilih opsi sebagai PT atau CV atau Lainnya",
            "statusBadanUsaha" 		: "pilih opsi sebagai PKP atau Non-PKP",
            "tipeBadanUsaha" 			: "pilih opsi sebagai UMKM atau Korporasi",
            "kategoriBadanUsaha" 		: "Jika vendor memilih sebagai UMKM pilih salah satu sebagai Menengah; Kecil; Mikro; 
                                        Jika vendor memilih sebagai Korporasi pilih salah satu sebagai BUMN(Grup); Swasta",
                                        
            "jenisKegiatanUsahaUtama" : "pilih salah satu sebagai 
                                        Material Konstruksi; Jasa Konstruksi & Renovasi; Jasa Ekspedisi & Pengepakan; Pengadaan & Sewa Peralatan-Mesin 
                      Jasa Advertising; Pengadaan & Sewa Perlengkapan-Furniture; Catering & Snack; Souvenir & Merchandise; Sewa Gedung 
                      Pertanian & Peternakan; Pengadaan & Sewa Kendaraan; Pendidikan dan Pelatihan; Konveksi & Laundry; Jasa Travel & Akomodasi;
                                        Jasa Percetakan & Media; Jasa Perawatan Gedung; Jasa Perawatan Elektronik & IT; Jasa Mandor & Tenaga Kerja Lainnya; Jasa Event Organizer 
                      Alat Tulis Kantor; Alat & Jasa Kesehatan-Keselamatan; Bahan Kimia; Barang Elektronik, Komputer & Periferal; Jasa Konsultan & Penilaian",
                                        
            "jenisPenyediaUsaha"      : "pilih salah satu sebagai
                                        Principal; Distributor / Agen Utama; Sub Distributor / Sub Agen; Manufaktur; Ritel
                      Perdagangan/Trading; Jasa; Lainnya"
                                        
            "NPWPPerusahaan"			: "muncul dari NPWP yang diinputkan saat melakukan registrasi" 
            
            "nomorIndukBerusaha" 		: "12345678", 
            
                                        #jumlah karakter maksimum 10 karakter alpha-numerik jika melebihi maka objek terkunci
            "bidangUsaha"             : "Data diambil dari KBLI 2020, untuk sample data bisa dicek pada laman 
                                        https://docs.google.com/spreadsheets/d/1ru9Ti7vlt4SQ2gyYqrtWf5y2szF6UvJW/edit#gid=26338488
                                        Tab KBLI 2020",
            
            "BUMNPengampu" 			: "pilih dari salah satu yang disediakan oleh sistem, 
                                        bisa memilih lebih dari satu BUMN, pengisian dengan cara diinput contoh PT. Pegadaian, PT. Telkom",
                                        
            "organisasiPengampu" 		: "pilih dari salah satu yang disediakan oleh sistem, bisa memilih lebih dari satu Organisasi Pengampu, 
                                        pengisian dengan cara diinput contoh IWAPI, HIPMI",
                                        
            "websitePerusahaan"		: "www.stark-industries.co", 
                                        #jumlah karakter maksimum 50 alpha-numerik diperbolehkan menggunakan spesial karakter (.) atau (-) jika melebihi maka objek terkunci 
                                        
            "jumlahKaryawanTotal"		: "kalkulasi = jumlahKaryawanLokal + jumlahKaryawanAsing, Orang", 
            
            "jumlahKaryawanLokal"		: "100 orang",  
                                        #jumlah karakter maksimum 10 karakter numerik jika melebihi maka objek terkunci
                                        
            "jumlahKaryawanAsing" 	: "25 orang", 
                                        #jumlah karakter maksimum 10 karakter numerik jika melebihi maka objek terkunci
                                        
            "noTeleponPerusahaan"		: "021-1234567", 
                                        #jumlah karakter maksimum 20 karakter numerik dengan special karakter (-) jika melebihi maka objek terkunci
                                        
          
                                        
            "alamatPerusahaan" 		: "Jl. Jenderal Gatot Soebroto Kav 52", 
                                        #jumlah karakter maksimum 100 karakter alphanumerik jika melebihi maka objek terkunci
                                        
            "Provinsi"				: "pilih salah satu provinsi dari 34 provinsi yang ada di Indonesia saat ini",
            "Kota/Kabupaten"			: "pilih salah satu kota dari provinsi yang telah dipilih pada opsi provinsi",
            "Kecamatan"				: "pilih salah satu kecamatan dari kota yang telah dipilih pada opsi kota",
            "Kelurahan"				: "pilih salah satu kelurahan dari kecamatan yang telah dipilih pada opsi kecamatan",
            "KodePos"					: "12310", 
                                        #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
                                        
            "pinGeoLocation"			: "Koordinat: (-6.2449089, 106.8447522)" #hasil taging dari map   
        }
        """

        Then The Vendor must click "Simpan" button to save information of "Profil Perusahaan"      
      
    Scenario: Negatif Scenario for company profile 
      Given The Vendor gets his or her badge on his or her vendor level on "Vendor Dashboard" as 
        """
        {
            "vendorLevel"  : "Vendor Basic",
            "progressLevel : "95% menuju Vendor Pro"
            "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
        }
        """ 
        And The Vendor wants to completed his or her company profile
        And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
        And The Vendor must click "Profil Perusahaan" Tab 
        And The Vendor will see "Informasi Perusahaan" form
        And The Vendor wants to add information in regards to "Data Perusahaan" on "Data Perusahaan Grid" which part of "Informasi Perusahaan" form  
        And The Vendor must define following information with empty field "Data Perusahaan" 
        """
        {
            "companyLogo" 			: "empty",                                   
            "namaPerusahaan" 			: "empty",
            "jenisBadanUsaha" 		: "empty",
            "statusBadanUsaha" 		: "empty",
            "tipeBadanUsaha" 			: "empty",
            "kategoriBadanUsaha" 		: "empty",                                    
            "jenisKegiatanUsahaUtama" : "empty",                                      
            "jenisPenyediaUsaha"      : "empty",                                       
            "NPWPPerusahaan"			: "muncul dari NPWP yang diinputkan saat melakukan registrasi"           
            "nomorIndukBerusaha" 		: "empty",                                    
            "bidangUsaha"             : "empty",          
            "BUMNPengampu" 			: "empty",
            "websitePerusahaan"		: "empty",
            "jumlahKaryawanTotal"		: "empty",        
            "jumlahKaryawanLokal"		: "empty",                     
            "jumlahKaryawanAsing" 	: "empty",                
            "noTeleponPerusahaan"		: "empty",
            "alamatPerusahaan" 		: "empty",
            "Provinsi"				: "empty",
            "Kota/Kabupaten"			: "empty",
            "Kecamatan"				: "empty",
            "Kelurahan"				: "empty",
            "KodePos"					: "empty", 
        }
        """
      And The Vendor must click "Simpan" button to save information of "Profil Perusahaan"
    Then The Vendor will get warning message tooltip on empty fields "Informasi Perusahaan"