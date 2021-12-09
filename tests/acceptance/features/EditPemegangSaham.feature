# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile 

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded

 #Edit Existing "Pemegang Saham"
 Scenario: Edit Selected record from Pemegang Saham 
    Given The Vendor still on "Informasi Perusahaan" form 
      When The Vendor already edit information from "Informasi Perusahaan" 
       And The Vendor wants to edit one of record from "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
       And The Vendor must clicks button "Edit" button from selected record 
       And The Vendor will see pop-up form of "Edit Pemegang Saham" which appear in front of "Informasi Perusahaan" form
       And The Vendor will see information which state for every changes should be re-check by verificator on the top of the "Informasi Perusahaan" form 
       """
       {
         "label" : "Perhatian :Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
       }
       """
       And The Vendor can modify data which displayed on "Edit Pemegang Saham" form 
       """
        {

           "no"				  		: "be.visible; state : disabled",   
           "namaPemegangSaham"  	: "Steven Rogers Barton",
           "jenisPemegangSaham" 	: "Perseorangan",
           "pemegangSaham"	  		: "Asing", 
           "presentaseKepemilikan	: "35 %" 
                                      #jumlah karakter maksimum 3 karakter numerik jika melebihi maka objek terkunci

        }
        """
        And The Vendor must click "Simpan" button to save information of "Pemegang Saham" 
        And The Vendor will see that pop-up form already closed when she/he clicks "Simpan"
        And The Vendor will see information changes from selected record from "Pemegang Saham" on "Pemegang Saham Grid"
        """
        {
           "No | Nama Pemegang Saham             | Jenis Pemegang Saham | Pemegang Saham  | Presentase Kepemilikan | Action      "
           "---------------------------------------------------------------------------------------------------------------------"
           "1 .| Steven Rogers Barton  			 | Perseorangan         | Asing			  | 35 %"                  | Edit Delete "
           "2 .| Natalia Alianovna Romanoff      | Perseorangan         | Asing			  | 10 %"                  | Edit Delete "
           "3 .| SHIELD                          | Badan Usaha          | Lokal 		  | 40 %"                  | Edit Delete "

        }
        """
    And if The Vendor wants to edit information in regards to "Pegawai" 
    And The Vendor can selected one of record from "Grid Pegawai" 
   Then The Vendor can clicks "Edit" button from selected record 
    #scenario will be define on 1a. Edit_Profil Perusahaan_GridPegawai.feature

 #Edit by Adding new "Pemegang Saham"
 Scenario: Add Another Pemegang Saham 
    Given The Vendor still on "Informasi Perusahaan" form 
      When The Vendor already define information from "Informasi Perusahaan" 
       And The Vendor wants to add another information in regards to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
       And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pemegang Saham Grid" to add records information in regards to "Pemegang Saham"
       And The Vendor will see pop-up form of "Tambah Pemegang Saham" which appear in front of "Informasi Perusahaan" form
        """
        {

           "no"				  		: "autonumber",
           "namaPemegangSaham"  	: "Adelle Adkins",
           "jenisPemegangSaham" 	: "Perseorangan",
           "pemegangSaham"	  		: "Asing, 
           "presentaseKepemilikan	: "15 %" 
                                      #jumlah karakter maksimum 3 karakter numerik jika melebihi maka objek terkunci

        }
        """
       And The Vendor must click "Simpan" button to save information of "Pemegang Saham" 
       And The Vendor will see that pop-up form already closed when she/he clicks "Simpan"
       And The Vendor will see information changes from selected record from "Pemegang Saham" on "Pemegang Saham Grid"
        """
        {
           "No | Nama Pemegang Saham             | Jenis Pemegang Saham | Pemegang Saham  | Presentase Kepemilikan | Action      "
           "---------------------------------------------------------------------------------------------------------------------"
           "1 .| Steven Rogers Barton  			 | Perseorangan         | Asing			  | 35 %"                  | Edit Delete "
           "2 .| Natalia Alianovna Romanoff      | Perseorangan         | Asing			  | 10 %"                  | Edit Delete "
           "3 .| SHIELD                          | Badan Usaha          | Lokal 		  | 40 %"                  | Edit Delete "
           "4 .| Adelle Adkins                   | Perseorangan         | Asing 		  | 15 %"                  | Edit Delete "

        }
        """
      Then if The Vendor wants to add another information from "Pemegang Saham" she/he can repeat process to add "Pemegang Saham" by repeat process from line 57 to 87 

#================================================================================================================================================

 Scenario: Negatif Scenario for add new information in regards to "Pemegang Saham" 
    When The Vendor already define information from "Informasi Perusahaan" 
       And The Vendor wants to add another information in regards to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
       And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pemegang Saham Grid" to add records information in regards to "Pemegang Saham"
       And The Vendor will see pop-up form of "Tambah Pemegang Saham" which appear in front of "Informasi Perusahaan" form
       And The Vendor not define anything on "Tambah Pemegang Saham" form / only define several fields which needed
        """
        {

           "no"				  		: "autonumber",
           "namaPemegangSaham"  	: "empty",
           "jenisPemegangSaham" 	: "not selected",
           "pemegangSaham"	  		: "not selected", 
           "presentaseKepemilikan	: "50 %" 
                                      #jumlah karakter maksimum 3 karakter numerik jika melebihi maka objek terkunci

        }
        """
       And The Vendor will get warning message tooltip on each mandatory fields as "{namaField} tidak boleh kosong" 
      Then The Vendor must define right information from "Pemegang Saham"