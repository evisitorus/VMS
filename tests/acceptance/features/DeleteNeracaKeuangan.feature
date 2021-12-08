# language: en
# workflow
Feature: Vendor - Delete vendor information - Neraca Keuangan

As a Vendor  
I want to delete Neraca Keuangan  
So that I can modify neraca keuangan information which has been recorded on the app 

 #Delete Neraca Keuangan
  Scenario: Delete selected Neraca Keuangan
    Given The Vendor still on "Laporan Keuangan" form 
      When The Vendor wants to delete one of record from "Neraca Keuangan" on "Neraca Keuangan Grid" which part of "Laporan Keuangan" form 
       And The Vendor must clicks button "Delete" button from selected record on "Neraca Keuangan" form
       And The Vendor will see pop-up message  
       """
       {
         "message" : "Apakah neraca keuangan tahun {tahun} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
       }
       """ 	
       And The Vendor must select "Yes" option
       And The Vendor will see information changes from selected record from "Neraca Keuangan" on "Neraca Keuangan Grid" and deleted record will be flag as "Terhapus"
       And The Vendor will see list of "Neraca Keuangan" on "Neraca Keuangan Grid"
        """
        {
           "No | Tahun   | Aktiva 		     | Pasiva 		       | Ekuitas              | Nett-Omzet           | Action      "
           "-------------------------------------------------------------------------------------------------------------------"
           "1 .| 2015    | Rp. 2.000.000.000 | Rp. 2.000.000.000   | Rp. 2.000.000.000    | Rp. 2.000.000.000    | Terhapus    "
           "2 .| 2016    | Rp. 1.000.000.000 | Rp. 1.000.000.000   | Rp. 1.000.000.000    | Rp. 1.000.000.000    | Edit Delete "
           "3 .| 2017    | Rp. 1.000.000.000 | Rp. 1.000.000.000   | Rp. 1.000.000.000    | Rp. 1.000.000.000    | Edit Delete " 

        }
        """
       And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Neraca Keuangan" on "Neraca Keuangan Grid"
    Then The Vendor already modify neraca keuangan information by deleting selected record of "Neraca Keuangan"