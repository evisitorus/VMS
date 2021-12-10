# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile

Background: 
    Given The Vendor already login to VMS Portal

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded 

 #edit riwayat pekerjaan 
  Scenario: Edit selected record from Riwayat Pekerjaan 
    Given The Vendor wants to edit selected document which has been recorded 
     When The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "Riwayat Pekerjaan" Tab 
      And The Vendor will see "Riwayat Pekerjaan" form
      """
      {
      	 "No | Nama Pekerjaan          									| Pemberi Pekerjaan 		| Nilai Pekerjaan   | Tahun  | Lampiran           | Action      "
         "----------------------------------------------------------------------------------------------------------------------------------------------------------"
         "1 .| Konstruksi Gedung Apartemen Untuk Anggota Avengers        | PT. Wijaya Karya (WIKA)  | Rp. 1.000.000.000	| 2012   | BuktiPekerjaan.pdf | Edit Delete "             
      }
      """
      And The Vendor must select one of record from "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid" which part of "Riwayat Pekerjaan" form 
      And The Vendor must clicks button "Edit" button from selected record "Riwayat Pekerjaan" form
      And The Vendor will see pop-up form of "Edit Riwayat Pekerjaan" which appear in front of "Riwayat Pekerjaan" form
      And The The Vendor will see information which state for every changes should be re-check by verificator 
      """
      {
         "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
      }
      """
      And The Vendor can modify data which displayed on "Riwayat Pekerjaan" form 
      """
      {
      
        "namaPekerjaan"     : "Konstruksi Gedung Apartemen Untuk Anggota Avengers", 
        "pemberiPekerjaan"  : "PT. Wijaya Karya (WIKA)",
        "nilaiPekerjaan"    : "Rp. 1.000.000.000",
        "tahunPekerjaan"    : "2015",
        "lampiranBukti"     :  "BuktiPekerjaan.pdf"
                               #lampiran dapat berupa JPG, PNG, PDF, maks 2MB
      }
      """
      And The Vendor must click "Simpan" button to save information of "Riwayat Pekerjaan" 
      And The Vendor will see that update pop-up form already closed when clicks "Simpan"
      And The Vendor will see information changes from selected record from "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid"
      """
      {
      	 "No | Nama Pekerjaan          									| Pemberi Pekerjaan 		| Nilai Pekerjaan   | Tahun  | Lampiran           | Action      "
         "----------------------------------------------------------------------------------------------------------------------------------------------------------"
         "1 .| Konstruksi Gedung Apartemen Untuk Anggota Avengers        | PT. Wijaya Karya (WIKA)  | Rp. 1.000.000.000	| 2015   | BuktiPekerjaan.pdf | Edit Delete "             
      }
      """
      And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid"
    Then The Vendor already modify her or his company information by editing recorded "Riwayat Pekerjaan" 
    
 #edit Riwayat Pekerjaan
  Scenario: Upload Riwayat Document more than 2 MB
    Given The Vendor on edit "riwayat pekerjaan"
     When The Vendor wants to upload document from riwayat pekerjaan 
      And The Vendor must click "browse" on "Lampiran Bukti" field 
      And The Vendor puts the document into "Lampiran Bukti" field 
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
      And The Vendor upload document more than 2 MB
    Then The Vendor will get warning message tooltip on lampiran bukti "Maksimum ukuran file adalah 2 MB"