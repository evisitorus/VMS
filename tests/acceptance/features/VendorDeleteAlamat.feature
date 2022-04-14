# language: en
# workflow
Feature: Vendor - Delete vendor information - Alamat

As a Vendor  
I want to delete Alamat  
So that I can modify Alamat information which has been recorded on the app 

   Background: 
      Given The Vendor already login to VMS Portal

 #delete Alamat
  Scenario: Delete selected record from Alamat 
    Given The Vendor wants to delete selected document which already uploaded  
     When The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "Alamat" Tab 
      And The Vendor will see "Alamat" form
      """
      {
      	 "No | Nama Alamat          | Alamat 									| Provinsi 		| Kota            | Action      "
         "----------------------------------------------------------------------------------------------------------------------"
         "1 .| Kantor Cabang        | Jl. Letnan Jenderal MT. Haryono Kav 123   | DKI Jakarta	| Jakarta Selatan | Edit Delete "
         "2 .| Kantor Operasional   | Jl. Letnan Jenderal S. Parman Kav 10      | DKI Jakarta	| Jakarta Barat   | Edit Delete "
         "3 .| Gudang               | Jl. Pahlawan Revolusi No. 1-10-1965		| DKI Jakarta	| Jakarta Timur   | Edit Delete "

       
          
      }
      """
      And The Vendor must select one of record from "Alamat" on "Alamat Grid" which part of "Alamat" form 
      And The Vendor must clicks button "Delete" button from selected record on "Alamat" form
      And The Vendor will see pop-up message  
      """
      {
         "message" : "Apakah Alamat {nama_alamat} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
      }
      """ 	
      And The Vendor must select "Yes" option
      And The Vendor will see list of modified "Alamat" on "Alamat Grid"
      """
      {
      	 "No | Nama Alamat          | Alamat 									| Provinsi 		| Kota            | Action      "
         "----------------------------------------------------------------------------------------------------------------------"
         "1 .| Kantor Cabang        | Jl. Letnan Jenderal MT. Haryono Kav 123   | DKI Jakarta	| Jakarta Selatan | Edit Delete "
         "2 .| Kantor Operasional   | Jl. Letnan Jenderal S. Parman Kav 102     | DKI Jakarta	| Jakarta Barat   | Edit Delete "
          
      }
      """
      And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Alamat" on "Alamat Grid"
    Then The Vendor already modify her or his company information by delete recorded "Alamat"