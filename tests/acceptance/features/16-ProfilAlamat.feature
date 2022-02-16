#language: en
#workflow
Feature: Vendor Basic - Completed vendor information 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 

Background: 
    Given The Vendor already login to VMS Portal

#manage Alamat
  Scenario: Manage Alamat
    Given The Vendor already add information in regards to "Dokumen"
     When The Vendor wants manage "Alamat" from the Company
       And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "Alamat" Tab 
      And The Vendor will see "Alamat" form 
      
      #1
      And The Vendor wants to add information in regards to "Alamat" on "Alamat Grid" which part of "Alamat" form 
      And The Vendor must clicks button "Tambah" where found on the left-buttom of "Alamat Grid" to add records information in regards to "Alamat"
      And The Vendor will see pop-up form of "Tambah Alamat" which appear in front of "Alamat" form
      """
      {
      
         "no"				  	: "autonumber",
         "namaAlamat"			: "pilih opsi Kantor Cabang, Kantor Operasional, Gudang, Lainnya", 
         "alamat" 				: "Jl. Jenderal Ahmad Yani no. 19-65 A", 
                                  #jumlah karakter maksimum 100 karakter alphanumerik jika melebihi maka objek terkunci
                                       
         "Provinsi"				: "pilih salah satu provinsi dari 34 provinsi yang ada di Indonesia saat ini",
         "Kota/Kabupaten"	    : "pilih salah satu kota dari provinsi yang telah dipilih pada opsi provinsi",
         "Kecamatan"			: "pilih salah satu kecamatan dari kota yang telah dipilih pada opsi kota",
         "Kelurahan"			: "pilih salah satu kelurahan dari kecamatan yang telah dipilih pada opsi kecamatan",
         "KodePos"				: "12310", 
                                  #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
                                      
         "pinGeoLocation"		: "Koordinat: (-6.2449089, 106.8447522)" #hasil taging dari map  
           
         
      }
      """
      And The Vendor must click "Simpan" button to save information of "Alamat" 
      And The Vendor will see that pop-up form already closed when she or he clicks "Simpan"
      And The Vendor will see list of "Alamat" on "Alamat Grid"
      """
      {
      	 "No | Nama Alamat          | Alamat 									| Provinsi 		| Kota            | Action      "
         "----------------------------------------------------------------------------------------------------------------------"
         "1 .| Kantor Cabang        | Jl. Letnan Jenderal MT. Haryono Kav 123   | DKI Jakarta	| Jakarta Selatan | Edit Delete "
         "2 .| Kantor Operasional   | Jl. Letnan Jenderal S. Parman Kav 10      | DKI Jakarta	| Jakarta Barat   | Edit Delete "
         "3 .| Gudang               | Jl. Pahlawan Revolusi No. 1-10-1965		| DKI Jakarta	| Jakarta Timur   | Edit Delete "

       
          
      }
      """
      #repeat process 1 to add another "Alamat"
      And The Vendor will see progress of upgrade level on "Vendor Dashboard"
      """
      {
         
          "vendorLevel"  : "Vendor Basic",
          "progressLevel : "50% menuju Vendor Pro"
          "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
      }
      """
    Then The Vendor already manage her or his company information by adding another address from the company 