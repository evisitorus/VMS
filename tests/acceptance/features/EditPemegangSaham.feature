# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile 

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded

Background: 
    Given The Vendor already login to VMS Portal

 #Edit Existing "Pemegang Saham"
 Scenario: Edit Selected record from Pemegang Saham 
    Given The Vendor still on "Informasi Perusahaan" form 
       And The Vendor wants to edit one of record from "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
       And The Vendor must clicks button "Edit" button from selected record on "Pemegang Saham" form
       And The Vendor will see pop-up form of "Edit Pemegang Saham" which appear in front of "Informasi Perusahaan" form
       And The Vendor will see information which state for every changes should be re-check by verificator 
       """
       {
         "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
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
        And The Vendor will see that update pop-up form already closed when clicks "Simpan"
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