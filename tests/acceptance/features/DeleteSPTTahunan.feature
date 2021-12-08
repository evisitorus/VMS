# language: en
# workflow
Feature: Vendor - Delete vendor information - SPT Tahunan

As a Vendor  
I want to delete SPT Tahunan  
So that I can modify SPT Tahunan information which has been recorded on the app 

Background: 
    Given The Vendor already login to VMS Portal

 #Delete SPT Tahunan
  Scenario: Delete selected SPT Tahunan
   Given The Vendor still on "Laporan Keuangan" form 
      When The Vendor wants to delete one of record from "SPT Tahunan" on "SPT Tahunan Grid" which part of "Laporan Keuangan" form 
       And The Vendor must clicks button "Delete" button from selected record on "SPT Tahunan" form
       And The Vendor will see pop-up message  
       """
       {
         "message" : "Apakah Laporan Keuangan Tahun {tahun} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
       }
       """
       And The Vendor must select "Yes" option
       And The Vendor will see information changes from selected record from "Laporan Keuangan" on "Laporan Keuangan Grid" and deleted record will be flag as "Terhapus"
       And The Vendor will see list of modified "SPT Tahunan" on "SPT Tahunan Grid"
       """
       {
           "No | Tahun   | Nomor Dokumen 		 | Lampiran 		   | Waktu Upload        | Action      "
           "-----------------------------------------------------------------------------------------------"
           "1 .| 2015    | 123455                | [Link] spt2015.pdf  | 22-11-2021 14:20:12 | Terhapus "
           "1 .| 2016    | 12341                 | [Link] spt2016.pdf  | 22-11-2021 14:20:12 | Edit Delete "
           "1 .| 2017    | 12342                 | [Link] spt2017.pdf  | 22-11-2021 14:20:12 | Edit Delete "

        }
        """
     And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Laporan Keuangan" on "Laporan Keuangan Grid"
    Then The Vendor already modify her or his company information by delete recorded "SPT Tahunan"