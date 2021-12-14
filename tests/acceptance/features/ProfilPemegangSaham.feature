#language: en
#workflow
Feature: Vendor Basic - Completed vendor information - Company Profile 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro

Background: 
    Given The Vendor already login to VMS Portal

   Background: 
      Given The Vendor already login to VMS Portal

   #manage company profile Adding "Pemegang Saham"
   Scenario: Positif Scenario for adding information in regards to "Pemegang Saham" 
      Given The Vendor still on "Informasi Perusahaan" form 
         When The Vendor already define information from "Informasi Perusahaan" 
         And The Vendor wants to add information in regards to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
         And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pemegang Saham Grid" to add records information in regards to "Pemegang Saham"
         And The Vendor will see pop-up form of "Tambah Pemegang Saham" which appear in front of "Informasi Perusahaan" form
         """
         {

            "no"				  		: "autonumber",
            "namaPemegangSaham"  	: "Steven Rogers",
            "jenisPemegangSaham" 	: "pilih salah satu opsi sebagai Perseorangan atau Badan Usaha",
            "pemegangSaham"	  		: "pilih salah satu opsi sebagai Lokal atau Asing", 
            "presentaseKepemilikan	: "50 %" 
                                       #jumlah karakter maksimum 3 karakter numerik jika melebihi maka objek terkunci

         }
         """
         And The Vendor must click "Simpan" button to save information of "Pemegang Saham" 
         And The Vendor will see that pop-up form already closed when clicks "Simpan"
         And The Vendor will see first 5 lists of "Pemegang Saham" on "Pemegang Saham Grid"
         """
         {
            "No | Nama Pemegang Saham             | Jenis Pemegang Saham | Pemegang Saham  | Presentase Kepemilikan | Action      "
            "---------------------------------------------------------------------------------------------------------------------"
            "1 .| Steven Rogers       			 | Perseorangan         | Lokal			  | 30 %"                  | Edit Delete "
            "2 .| Natalia Alianovna Romanoff      | Perseorangan         | Asing			  | 10 %"                  | Edit Delete "
            "3 .| SHIELD                          | Badan Usaha          | Lokal 		  | 40 %"                  | Edit Delete "

         }
         """
         And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Pemegang Saham" on "Pemegang Saham Grid"
         And The Vendor can repeat process to add "Pemegang Saham" by repeat process from line 21 to 46 
      Then The Vendor can continue to fill information in regards to "Pemegang Saham" by clicking "Tambah Pemegang Saham" button where placed on the right-buttom of "Pemegang Saham" Grid
      #scenario will be define on 1a. VMS_Profil Perusahaan_GridPegawai.feature

   #manage company profile Adding "Pemegang Saham"
   Scenario: Negatif Scenario for adding information in regards to "Pemegang Saham" 
      Given The Vendor still on "Informasi Perusahaan" form 
         When The Vendor already define information from "Informasi Perusahaan" 
         And The Vendor wants to add information in regards to "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
         And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pemegang Saham Grid" to add records information in regards to "Pemegang Saham"
         #  And The Vendor will see pop-up form of "Tambah Pemegang Saham" which appear in front of "Informasi Perusahaan" form
         And The Vendor not define anything on "Tambah Pemegang Saham" form or only define several fields which needed
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
         And The Vendor will get warning message tooltip on each mandatory fields as "namaField tidak boleh kosong" 
         Then The Vendor must define right information from "Pemegang Saham" while can continue to next process to define "Tambah Pemegang Saham" 