# language: en
# workflow
Feature: Vendor - Delete vendor information - Riwayat Pekerjaan

As a Vendor  
I want to delete Riwayat Pekerjaan  
So that I can modify Riwayat Pekerjaan information which has been recorded on the app

   Background: 
      Given The Vendor already login to VMS Portal

 #delete riwayat pekerjaan 
  Scenario: Delete selected record from Riwayat Pekerjaan 
    Given The Vendor wants to delete selected document which already uploaded 
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
      And The Vendor must clicks button "Delete" button from selected record on "Riwayat Pekerjaan" form
       And The Vendor will see pop-up message appear
      """
      {
         "message" : "Apakah Riwayat Pekerjaan {nama_pekerjaan} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
      }
      """
      And The Vendor must select "Yes" option on pop-up message
      And The Vendor will see information changes from selected record from "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid" and deleted record will be flag as "Terhapus"
      And The Vendor will see list of modified "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid"
      """
      {
      	 "No | Nama Pekerjaan          									| Pemberi Pekerjaan 		| Nilai Pekerjaan   | Tahun  | Lampiran           | Action      "
         "----------------------------------------------------------------------------------------------------------------------------------------------------------"
         "1 .| Konstruksi Gedung Apartemen Untuk Anggota Avengers        | PT. Wijaya Karya (WIKA)  | Rp. 1.000.000.000	| 2012   | BuktiPekerjaan.pdf | Terhapus "   
      }
      """
      And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Riwayat Pekerjaan" on "Riwayat Pekerjaan Grid"
    Then The Vendor already modify her or his company information by delete recorded "Riwayat Pekerjaan"   