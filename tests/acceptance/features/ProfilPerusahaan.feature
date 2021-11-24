#language: en
#workflow
Feature: Vendor Basic - Completed vendor information - Company Profile 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 


 #manage company profile ##dipisah fitur "1a1.lengkapi data Informasi Perusahaan"
  Scenario: Positif Scenario for company profile 
    Given The Vendor (Basic) already login into VMS using his or her registered company information
     When The Vendor gets his or her badge on his or her vendor level on "Vendor Dashboard" as 
      """
      {
          "vendorLevel"  : "Vendor Basic",
          "progressLevel : "95% menuju Vendor Pro"
          "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
      }
      """ 
      And The Vendor (Basic) wants to completed his or her company profile
      And The Vendor (Basic) must click "Profil Perusahaan" menu where found on "Side Menu" of "Vendor Dashboard"
      And The Vendor (Basic) will see "Informasi Perusahaan" form 
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
      ##setelah melengkapi form, actionnya apa?


      #1 ##dipisah fitur "1a2.lengkapi data pemegangSaham" 
      And The Vendor (Basic) wants to add information in regards to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
      And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Pemegang Saham Grid" to add records information in regards to "Pemegang Saham"
      And The Vendor (Basic) will see pop-up form of "Tambah Pemegang Saham" which appear in front of "Informasi Perusahaan" form
      """
      {
      
         "no"				  	: "autonumber",
         "namaPemegangSaham"  	: "Steven Rogers",
         "jenisPemegangSaham" 	: "pilih salah satu opsi sebagai Perseorangan atau Badan Usaha",
         "pemegangSaham"	  	: "pilih salah satu opsi sebagai Lokal atau Asing", 
         "presentaseKepemilikan	: "50 %" 
                                  #jumlah karakter maksimum 3 karakter numerik jika melebihi maka objek terkunci
         
      }
      """
      And The Vendor (Basic) must click "Simpan" button to save information of "Pemegang Saham" 
      And The Vendor (Basic) will see that pop-up form already closed when she or he clicks "Simpan"
      And The Vendor (Basic) will see list of "Pemegang Saham" on "Pemegang Saham Grid"
      """
      {
      	 "No | Nama Pemegang Saham             | Jenis Pemegang Saham | Pemegang Saham  | Presentase Kepemilikan | Action      "
         "---------------------------------------------------------------------------------------------------------------------"
         "1 .| Steven Rogers       			   | Perseorangan         | Lokal			| 30 %"                  | Edit Delete "
         "2 .| Natalia Alianovna Romanoff      | Perseorangan         | Asing			| 10 %"                  | Edit Delete "
         "3 .| SHIELD                          | Badan Usaha          | Lokal 			| 40 %"                  | Edit Delete "
          
      }
      """
      #repeat process 1 to add another "Pemegang Saham"
      
      #2 ##dipisah fitur "1a3. lengkapi data Pegawai" 
      And The Vendor (Basic) wants to add information  in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
      And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai" 
      """
      {
      
         "no"				  	: "autonumber",
         "NIK"					: "1234567",
         "namaKaryawan"  		: "James Bucky Barnes",
         "TipeKaryawan" 		: "pilih salah satu opsi sebagai Tenaga Ahli atau Tenaga Terampil atau Tenaga Administrasi",
         "jabatan"				: "CTO",  
                                   #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
                                   
         "BidangPekerjaan"	  	: "Teknologi Informasi", 
                                   #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
                                   
         "Resume"				: "browse upload", 
                                   #ekstensi file pdf, doc, docx dengan maksimum 20MB
         
      }
      """
      And The Vendor (Basic) will see list of "Pegawai" on "Pegawai Grid"
      """
      {
      	 "No | NIK       | Nama Pegawai         | Tipe Karyawan 	  | Jabatan       | Bidang Pekerjaan      | Resume        |Action       "
         "----------------------------------------------------------------------------------------------------------------------------------"
         "1 .| 1234567   | James Bucky Barnes   | Tenaga Ahli         | CTO			  | Teknologi Informasi   | CV_Barnes.pdf | Edit Delete "
         "2 .| 8901234   | Sharon Charter       | Tenaga Administrasi | Spv Admin	  | Human Resources       | CV_Charter.pdf| Edit Delete "
         "3 .| 3456789   | Phil Coulson	        | Tenaga Terampil     | Agent    	  | Operasional           | CV_Coulson.pdf| Edit Delete "
          
      }
      """
      #repeat process 2 to add another "Pegawai"
      
      And The Vendor (Basic) wants to save information of "Profil Perusahaan" 
      And The Vendor (Basic) must click "Simpan" button where found on the left-buttom of "Informasi Perusahaan" form 
      And The Vendor (Basic) will see confirmation message 
      """
      {
      
        "message" : "Simpan profil perusahaan ?",
        "option"  : "Yes/No"
      }
      """
      And The Vendor (Basic) must select "Yes" option 
      And The Vendor (Basic) will see progress of upgrade level on "Vendor Dashboard"
      """
      {
         
          "vendorLevel"  : "Vendor Basic",
          "progressLevel : "75% menuju Vendor Pro"
          "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
      }
      """
    Then The Vendor (Basic) already manage her or his company information by adding "Profil Perusahaan"

  Scenario: Negatif Scenario for company profile 
    Given The Vendor (Basic) already login into VMS using his or her registered company information
     When The Vendor gets his or her badge on his or her vendor level on "Vendor Dashboard" as 
      """
      {
          "vendorLevel"  : "Vendor Basic",
          "progressLevel : "95% menuju Vendor Pro"
          "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
      }
      """ 
      And The Vendor (Basic) wants to completed his or her company profile
      And The Vendor (Basic) must click "Profil Perusahaan" menu where found on "Side Menu" of "Vendor Dashboard"
      And The Vendor (Basic) will see "Informasi Perusahaan" form 
      And The Vendor (Basic) not define mandatory fields such as 
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
      And The Vendor (Basic) not define anything on "Pemegang Saham"
      And The Vendor (Basic) not define anything on "Pegawai"
      And The Vendor (Basic) wants to save information of "Profil Perusahaan" 
      And The Vendor (Basic) must click "Simpan" button where found on the left-buttom of "Informasi Perusahaan" form 
      And The Vendor (Basic) will see confirmation message 
      """
      {
      
        "message" : "Simpan profil perusahaan ?",
        "option"  : "Yes/No"
      }
      """
      And The Vendor (Basic) must select "Yes" option 
      And The Vendor (Basic) warning message tooltip on each mandatory fields as "{namaField} tidak boleh kosong" 
   
    Then The Vendor (Basic) cant continue to process saving data of "Profil Perusahaan"