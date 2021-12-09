​# language: en

# workflow
Feature: Vendor - Delete vendor information - Pegawai
	#---------------------------------------------------------
    # Vendor - #4 Vendor can delete pegawai information 
    #---------------------------------------------------------

As a Vendor  
I want to delete pegawai  
So that I can modify pegawai information which has been recorded on the app 

#================================================================================================================================================

 #Delete Existing "Pegawai"
 Scenario: Delete Selected record from Pegawai
    Given The Vendor still on "Informasi Perusahaan" form 
      When The Vendor already on information from "Informasi Perusahaan" 
       And The Vendor wants to delete one of record from "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
       And The Vendor must clicks button "Delete" button from selected record
	   And The Vendor will see confirmation message  
       """
      {
         "message" : "Apakah Pegawai{nama_pegawai} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
      }
      """ 	
      And The Vendor must select "Yes" option
      And The Vendor will see information changes from selected record from "Pegawai" on "Pegawai Grid" and deleted record will be flag as "Terhapus"
      And The Vendor will see list of "Pegawai" on "Pegawai Grid"
      """
        {
           "No | NIK       | Nama Pegawai         | Tipe Karyawan 	    | Jabatan     | Bidang Pekerjaan      | Resume        |Action       "
           "----------------------------------------------------------------------------------------------------------------------------------"
           "1 .| 1234567   | James Bucky Barnes   | Tenaga Ahli         | CIO	      | IT				      | CV_Barnes.pdf | Edit Delete "
           "2 .| 8901234   | Sharon Charter       | Tenaga Administrasi | Spv Admin	  | Human Resources       | CV_Charter.pdf| Edit Delete "
           "3 .| 3456789   | Phil Coulson	      | Tenaga Terampil     | Agent    	  | Operasional           | CV_Coulson.pdf| Terhapus "

        }
       """
	 And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Pegawai" on "Pegawai Grid"
    Then The Vendor already modify pegawai information by deleting selected record of "Pegawai"

#================================================================================================================================================