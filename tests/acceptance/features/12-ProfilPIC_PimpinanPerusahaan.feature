# language: en
# workflow

Feature: Vendor - Pimpinan Perusahaan List
    
As a Vendor
I want to access Pimpinan Perusahaan List on PIC
So that I can manage Pimpinan Perusahaan in company  

    Background: 
      Given The Vendor already login to VMS Portal

#manage Pimpinan Adding "Pimpinan dan Pengurus"
  Scenario: Positif Scenario for adding information in regards to "Pimpinan dan Pengurus Perusahaan" 
     Given The Vendor still on "PIC" form 
       And The Vendor wants to add information in regards to "Pimpinan Perusahaan" on "Pimpinan dan Pengurus Grid" which part of "PIC" form 
       And The Vendor must clicks button "Tambah" where found on the right-bottom of "Pimpinan dan Pengurus Grid" to add records information in regards to "Pimpinan dan Pengurus Perusahaan"
       And The Vendor will see pop-up form of "Tambah Pimpinan" which appear in front of "PIC" form
        """
        {

           "no"				  		: "autonumber",
           "namaPengurus"  	: "Steven Rogers",
           "jabatan" 	: "Direktur Utama",
           "noIdentitas"	  		: "329837192479812", 
	   "kartuIdentitas: "browse"
          						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB 
        }
        """
        And The Vendor must click "Simpan" button to save information of "Pimpinan dan Pengurus" 
        And The Vendor will see that pop-up form already closed when she / he clicks "Simpan"
        And The Vendor will see first 5 lists of "Pimpinan dan Pengurus" on "Pimpinan dan Pengurus Grid"
        """
        {
           "No | Nama Pengurus             | Jabatan | No. Identitas  | Kartu Identitas | Action      "
        }
        """

 #manage company profile Adding "Pemegang Saham"
  Scenario: Negatif Scenario for adding information in regards to "Pimpinan dan Pengurus" 
     Given The Vendor still on "PIC" form 
      When The Vendor already define information from "Pimpinan dan Pengurus" 
       And The Vendor wants to add information in regards to "Pimpinan Perusahaan" on "Pimpinan dan Pengurus Grid" which part of "PIC" form 
       And The Vendor must clicks button "Tambah" where found on the right-bottom of "Pimpinan dan Pengurus Grid" to add records information in regards to "Pimpinan dan Pengurus Perusahaan"
       And The Vendor will see pop-up form of "Tambah Pimpinan" which appear in front of "PIC" form with empty field
       And The Vendor not define anything on "Tambah Pimpinan" form / only define several fields which needed
        """
        {

           "no"				  		: "autonumber",
           "namaPimpinan"  	: "empty",
           "jabatan" 	: "Direktur",
           "noIdentitas"	  		: "41241212312312", 
           "kartuIdentitas: "browse"
          						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB                              

        }
        """
       And The Vendor will get warning message tooltip on each mandatory Pimpinan dan Pengurus fields as "namaField tidak boleh kosong" 
      Then The Vendor must define right information from "Pimpinan dan Pengurus"

#manage Pimpinan Adding "Pimpinan dan Pengurus"
 Scenario: Negative Scenario for adding information in regards to "Pimpinan dan Pengurus Perusahaan" 
    Given The Vendor still on "PIC" form 
      And The Vendor wants to add information in regards to "Pimpinan Perusahaan" on "Pimpinan dan Pengurus Grid" which part of "PIC" form 
      And The Vendor must clicks button "Tambah" where found on the right-bottom of "Pimpinan dan Pengurus Grid" to add records information in regards to "Pimpinan dan Pengurus Perusahaan"
      And The Vendor will see pop-up form of "Tambah Pimpinan" which appear in front of "PIC" form with document upload more than 2 MB
        """
        {

           "no"				  		: "autonumber",
           "namaPengurus"  	: "Steven Rogers",
           "jabatan" 	: "Direktur Utama",
           "noIdentitas"	  		: "329837192479812", 
           "kartuIdentitas: "browse"
          						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB 
        }
        """
	  And The Vendor upload "Kartu Identitas" more than 2 MB
      And The Vendor must click "Simpan" button to save information of "Pimpinan dan Pengurus"
     Then The Vendor will get warning message tooltip on kartuIdentitas "Maksimum ukuran file adalah 2 MB"