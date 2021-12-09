# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile   

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded

Background: 
    Given The Vendor already login to VMS Portal

 #edit Alamat
  Scenario: Edit selected record from Alamat 
    Given The Vendor wants to edit selected document which has been recorded  
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
      And The Vendor must clicks button "Edit" button from selected record on "Alamat" form
      And The Vendor will see pop-up form of "Edit Alamat" which appear in front of "Alamat" form
      And The Vendor will see information which state for every changes should be re-check by verificator 
      """
      {
         "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
      }
      """
      And The Vendor can modify data which displayed on "Alamat" form 
      """
      {
      
         "no"				  	: "2; state : disable",
         "namaAlamat"			: "Kantor Operasional", 
         "alamat" 				: "Jl. Letnan Jenderal S. Parman Kav 102"                                  
         "Provinsi"				: "DKI Jakarta",
         "Kota/Kabupaten"	    : "Jakarta Barat",
         "Kecamatan"			: "Palmerah",
         "Kelurahan"			: "Slipi",
         "KodePos"				: "12310", 
         "pinGeoLocation"		: "Koordinat: (-6.2449089, 106.8447522)" #hasil taging dari map 
      }
      """
      And The Vendor must click "Simpan" button to save information of "Alamat" 
      And The Vendor will see that update pop-up form already closed when clicks "Simpan"
      And The Vendor will see information changes from selected record from "Alamat" on "Alamat Grid"
      """
      {
      	 "No | Nama Alamat          | Alamat 									| Provinsi 		| Kota            | Action      "
         "----------------------------------------------------------------------------------------------------------------------"
         "1 .| Kantor Cabang        | Jl. Letnan Jenderal MT. Haryono Kav 123   | DKI Jakarta	| Jakarta Selatan | Edit Delete "
         "2 .| Kantor Operasional   | Jl. Letnan Jenderal S. Parman Kav 102     | DKI Jakarta	| Jakarta Barat   | Edit Delete "
         "3 .| Gudang               | Jl. Pahlawan Revolusi No. 1-10-1965		| DKI Jakarta	| Jakarta Timur   | Edit Delete "

       
          
      }
      """
      And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Alamat" on "Alamat Grid"
    Then The Vendor already modify her or his company information by editing recorded "Alamat"