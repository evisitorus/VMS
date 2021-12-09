# language: en

# workflow
Feature: Vendor - Delete vendor information - Pemegang Saham
	#---------------------------------------------------------
    # Vendor - #4 Vendor can delete pemegang saham information 
    #---------------------------------------------------------

As a Vendor  
I want to delete pemegang saham  
So that I can modify pegawai information which has been recorded on the app 

#================================================================================================================================================

 #Delete Existing "Pemegang Saham"
 Scenario: Delete Selected record from Pemegang Saham 
    Given The Vendor still on "Informasi Perusahaan" form 
      When The Vendor already on information from "Informasi Perusahaan" 
       And The Vendor wants to delete one of record from "Pemegang Saham" on "Pemegang Saham Grid" which part of "Informasi Perusahaan" form 
       And The Vendor must clicks button "Delete" button from selected record
       And The Vendor will see confirmation message  
       """
       {
         "message" : "Apakah Pemegang Saham atas nama {nama_pemegang_saham} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
       }
       """ 	
      And The Vendor must select "Yes" option
       And The Vendor will see information changes from selected record from "Pemegang Saham" on "Pemegang Saham Grid" and deleted record will be flag as "Terhapus"
       And The Vendor will see list of "Pemegang Saham" on "Pemegang Saham Grid"
        """
        {
           "No | Nama Pemegang Saham             | Jenis Pemegang Saham | Pemegang Saham  | Presentase Kepemilikan | Action      "
           "---------------------------------------------------------------------------------------------------------------------"
           "1 .| Steven Rogers Barton  			 | Perseorangan         | Asing			  | 35 %"                  | Terhapus    "
           "2 .| Natalia Alianovna Romanoff      | Perseorangan         | Asing			  | 10 %"                  | Edit Delete "
           "3 .| SHIELD                          | Badan Usaha          | Lokal 		  | 40 %"                  | Edit Delete "

        }
        """
       And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Pemegang Saham" on "Pemegang Saham Grid"
   Then The Vendor already modify pegawai information by deleting selected record of "Pemegang Saham"