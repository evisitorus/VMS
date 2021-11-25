#language: en
#workflow
Feature: Vendor Basic - Completed vendor information 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 

#manage Dokumen
  Scenario: Positive Scenario for Manage Document 
    Given The Vendor already add information in regards to "Akun PIC"
     When The Vendor wants manage "Dokumen" which needed for further verification from the company  
      And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "Dokumen" Tab 
      And The Vendor will see "Dokumen" form 
      
      #1
      And The Vendor wants to add information in regards to "Dokumen" on "Dokumen Grid" which part of "Dokumen" form 
      And The Vendor must clicks button "Tambah" where found on the left-buttom of "Dokumen Grid" to add records information in regards to "Dokumen"
      And The Vendor will see pop-up form of "Tambah Dokumen" which appear in front of "Dokumen" form
      """
      {
      
         "nomorDokumen"		    : "dokumen01",
         "namaDokumen"			: "Akta Pendirian Perusahaan", 
         "berlakuDari"          : "pilih tanggal pada datepicker dengan format dd-mm-yyyy, set default as today"
         "berlakuSampai"        : "pilih opsi : Seumur Hidup atau pilih tanggal pada datepicker dengan format dd-mm-yyyy, set default as today"
         "lampiran"				: "browse"
          						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB
           
         
      }
      """
      And The Vendor must click "Simpan" button to save information of "Dokumen" 
      And The Vendor will see that pop-up form already closed when she or he clicks "Simpan"
#       And The Vendor will see first 5 lists of "Dokumen" on "Dokumen Grid"
#       """
#       {
#       	 "No | Nama Dokumen                | Berlaku Dari | Berlaku Sampai | Lampiran                 | Action      "
#          "----------------------------------------------------------------------------------------------------------"
#          "1 .| Akta Pendirian Perusahaan   | 01-01-2012   | 01-01-2022	   | [Link] aktapendirian.pdf | Edit Delete "
#          "2 .| KTP Direktur                | 01-01-2012   | Seumur Hidup   | [Link] ktpDirektur.pdf   | Edit Delete "
#          "3 .| NPWP Perusahaan             | 01-01-2012   | Seumur Hidup   | [Link] npwpPerusahaan.pdf| Edit Delete "
       
          
#       }
#       """
#       #repeat process 1 to add another "Dokumen"     
#       And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Dokumen" on "Dokumen Grid"
# 	  And The Vendor will get flag as "Completed" for checklist  if already upload at least one record on "Dokumen" and will be displayed on "Verifikasi Kelengkapan" form also "Dashboard" form       
#       And The Vendor will see progress of upgrade level on "Vendor Dashboard"
#       """
#       {
         
#           "vendorLevel"  : "Vendor Basic",
#           "progressLevel : "60% menuju Vendor Pro"
#           "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
#       }
#       """
#     Then The Vendor already manage her or his company information by uploading necessary documents  
	
#   Scenario: Lampiran file more than 2 MB
#     Given The Vendor already add information in regards to "Akun PIC"
#      When The Vendor wants manage "Dokumen" which needed for further verification from the company  
#       And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
#       And The Vendor must click "Dokumen" Tab 
#       And The Vendor will see "Dokumen" form 
      
#       #1
#       And The Vendor wants to add information in regards to "Dokumen" on "Dokumen Grid" which part of "Dokumen" form 
#       And The Vendor must clicks button "Tambah" where found on the left-buttom of "Dokumen Grid" to add records information in regards to "Dokumen"
#       And The Vendor will see pop-up form of "Tambah Dokumen" which appear in front of "Dokumen" form
#       """
#       {
      
#          "no"				  	: "autonumber",
#          "namaDokumen"			: "Akta Pendirian Perusahaan", 
#          "berlakuDari"          : "pilih tanggal pada datepicker dengan format dd-mm-yyyy, set default as today"
#          "berlakuSampai"        : "pilih opsi : Seumur Hidup atau pilih tanggal pada datepicker dengan format dd-mm-yyyy, set default as today"
#          "lampiran"				: "browse"
#           						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB
           
         
#       }
#       """
#       And The Vendor upload document more than 2 MB
#     Then The Vendor warning message tooltip on lampiran "Maksimum ukuran file adalah 2 MB"  