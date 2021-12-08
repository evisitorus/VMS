# language: en
# workflow
Feature: Vendor - Delete vendor information - Asset

As a Vendor  
I want to delete asset  
So that I can modify asset information which has been recorded on the app 

Background: 
    Given Vendor already login to VMS Portal

  #Delete Asset
  Scenario: Delete selected record from Asset
    Given The Vendor wants to delete selected document which already uploaded 
     When The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "Asset" Tab 
      And The Vendor will see "Asset" form
      """
      {
      	 "No | Nama Asset      |Jumlah (Unit) 		| Tahun Pembuatan  | Action      "
         "---------------------------------------------------------------------------"
         "1 .| Crane           | 100                | 2012             | Edit Delete "             
      }
      """
      And The Vendor must select one of record from "Asset" on "Asset Grid" which part of "Asset" form 
      And The Vendor must clicks button "Delete" button from selected record on "Asset" form
      And The Vendor will see pop-up message  
      """
      {
         "message" : "Apakah asset {nama_asset} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
      }
      """ 	
      And The Vendor must select "Yes" option
      And The Vendor will see information changes from selected record from "Asset" on "Asset Grid" and deleted record will be flag as "Terhapus"
      And The Vendor will see list of modified "Asset" on "Asset Grid"
      """
      {
         "No | Nama Asset      |Jumlah (Unit) 		| Tahun Pembuatan  | Action      "
         "---------------------------------------------------------------------------"
         "1 .| Crane           | 100                | 2012             | Terhapus    "           
      }
      """
      And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Asset" on "Asset Grid"
    Then The Vendor already modify her or his company information by delete recorded asset   