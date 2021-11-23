# language: en
# workflow
Feature: Vendor Basic - Completed vendor information 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 

 #manage Riwayat Pekerjaan
  Scenario: Positif Scenario for Riwayat Pekerjaan 
    Given The Vendor already add information in regards to "Informasi Keuangan"
     When The Vendor wants manage "Riwayat Pekerjaan" from the Company
       And The Vendor click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor click "Riwayat Pekerjaan" Tab 
      And The Vendor will see "Riwayat Pekerjaan" form 
      
      #1
      And The Vendor wants to add information in regards to "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid" which part of "Riwayat Pekerjaan" form 
      And The Vendor must clicks button "Tambah" where found on the left-buttom of "Riwayat Pekerjaan Grid" to add records information in regards to "Riwayat Pekerjaan"
      And The Vendor will see pop-up form of "Tambah Riwayat Pekerjaan" which appear in front of "Riwayat Pekerjaan" form
      """
      {
      
        "namaPekerjaan"     : "Konstruksi Gedung Apartemen Untuk Anggota Avengers", 
        "pemberiPekerjaan"  : "PT. Wijaya Karya (WIKA)",
        "nilaiPekerjaan"    : "Rp. 1.000.000.000"
                               #prefiks Rp. muncul otomatis, diinputkan dengan karakter bertipe integer 
        "tahunPekerjaan"    : "2012"
                               #maksimal karakter 10 karakter numerik,jika melebihi maka objek terkunci
        "lampiranBukti"     :  "BuktiPekerjaan.pdf"
                               #lampiran dapat berupa JPG, PNG, PDF, maks 2MB
      }
      """
      And The Vendor must click "Simpan" button to save information of "Riwayat Pekerjaan" 
      And The Vendor will see that pop-up form already closed when she/he clicks "Simpan"
      And The Vendor will see first 5 lists of "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid"
      """
      {
      	 "No | Nama Pekerjaan          									| Pemberi Pekerjaan 		| Nilai Pekerjaan   | Tahun  | Lampiran           | Action      "
         "----------------------------------------------------------------------------------------------------------------------------------------------------------"
         "1 .| Konstruksi Gedung Apartemen Untuk Anggota Avengers        | PT. Wijaya Karya (WIKA)  | Rp. 1.000.000.000	| 2012   | BuktiPekerjaan.pdf | Edit Delete "             
      }
      """
      #repeat process 1 to add another "Riwayat Pekerjaan"
#       And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Riwayat Perkejaan" on "Riwayat Pekerjaan Grid"
# 	  And The Vendor will get flag as "Completed" for checklist  if already upload at least one record on "Riwayat Pekerjaan" and will be displayed on "Verifikasi Kelengkapan" form also "Dashboard" form 
#       And The Vendor will see progress of upgrade level on "Vendor Dashboard"
#       """
#       {
         
#           "vendorLevel"  : "Vendor Basic",
#           "progressLevel : "35% menuju Vendor Pro"
#           "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
#       }
#       """
#     Then The Vendor already manage her/his company information by adding Riwayat Pekerjaan from the company 

#  #manage Riwayat Pekerjaan
#   Scenario: Upload Riwayat Document more than 2 MB
#     Given The Vendor already add information in regards to "Informasi Keuangan"
#      When The Vendor wants manage "Riwayat Pekerjaan" from the Company
#       And The Vendor must click "Riwayat Pekerjaan" menu where found on "Side Menu" of "Vendor Dashboard"
#       And The Vendor will see "Riwayat Pekerjaan" form 
      
#       #1
#       And The Vendor wants to add information in regards to "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid" which part of "Riwayat Pekerjaan" form 
#       And The Vendor must clicks button "Tambah" where found on the left-buttom of "Riwayat Pekerjaan Grid" to add records information in regards to "Riwayat Pekerjaan"
#       And The Vendor will see pop-up form of "Tambah Riwayat Pekerjaan" which appear in front of "Riwayat Pekerjaan" form
#       """
#       {
      
#         "namaPekerjaan"     : "Konstruksi Gedung Apartemen Untuk Anggota Avengers", 
#         "pemberiPekerjaan"  : "PT. Wijaya Karya (WIKA)",
#         "nilaiPekerjaan"    : "Rp. 1.000.000.000"
#                                #prefiks Rp. muncul otomatis, diinputkan dengan karakter bertipe integer 
#         "tahunPekerjaan"    : "2012"
#                                #maksimal karakter 10 karakter numerik,jika melebihi maka objek terkunci
#         "lampiranBukti"     :  "BuktiPekerjaan.pdf"
#                                #lampiran dapat berupa JPG, PNG, PDF, maks 2MB
#       }
#       """
#       And The Vendor upload document more than 2 MB
#     Then The Vendor warning message tooltip on lampiran "Maksimum ukuran file adalah 2 MB"