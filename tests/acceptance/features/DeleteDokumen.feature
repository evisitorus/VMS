# language: en
# workflow
Feature: Vendor - Delete vendor information - Document

As a Vendor  
I want to delete document  
So that I can modify document which has been recorded on the app 

Background: 
    Given The Vendor already login to VMS Portal

  #Delete Existing Document 
  Scenario: Delete Selected Record from Document 
    Given The Vendor wants to delete selected document which already uploaded 
     When The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "Dokumen" Tab 
      And The Vendor will see "Dokumen" form
      """
      {
      	 "No | Nama Dokumen                | Berlaku Dari | Berlaku Sampai | Lampiran                 | Action      "
         "----------------------------------------------------------------------------------------------------------"
         "1 .| Akta Pendirian Perusahaan   | 01-01-2012   | 01-01-2022	   | [Link] aktapendirian.pdf | Edit Delete "
         "2 .| KTP Direktur                | 01-01-2012   | Seumur Hidup   | [Link] ktpDirektur.pdf   | Edit Delete "
         "3 .| NPWP Perusahaan             | 01-01-2012   | Seumur Hidup   | [Link] npwpPerusahaan.pdf| Edit Delete "
       
          
      }
      """
      And The Vendor must select one of record from "Dokumen" on "Dokumen Grid" which part of "Dokumen" form 
      And The Vendor must clicks button "Delete" button from selected record on "Dokumen" form
      And The Vendor will see pop-up message  
      """
      {
         "message" : "Apakah Dokumen {nama_dokumen} akan dihapus dari sistem ?"
         "option"  : "Yes/No"
      }
      """ 	
      And The Vendor must select "Yes" option
      And The Vendor will see information changes from selected record from "Dokumen" on "Dokumen Grid" and deleted record will be flag as "Terhapus"
      And The Vendor will see list of modified "Dokumen" on "Dokumen Grid"
      """
      {
      	 "No | Nama Dokumen                | Berlaku Dari | Berlaku Sampai | Lampiran                 | Action      "
         "----------------------------------------------------------------------------------------------------------"
         "1 .| Akta Pendirian Perusahaan   | Seumur Hidup | Seumur Hidup   | [Link] aktapendirian.pdf | Edit Delete "
         "2 .| KTP Direktur                | 01-01-2012   | Seumur Hidup   | [Link] ktpDirektur.pdf   | Terhapus    "
         "3 .| NPWP Perusahaan             | 01-01-2012   | Seumur Hidup   | [Link] npwpPerusahaan.pdf| Edit Delete "
       
          
      }
      """
     And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Dokumen" on "Dokumen Grid"
   Then The Vendor already modify her or his company information by delete recorded "Dokumen"