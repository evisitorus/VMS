# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile   

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded

  Background: 
    Given The Vendor already login to VMS Portal

  #Edit Existing Document 
  Scenario: Edit Selected Record from Document 
    Given The Vendor wants to edit selected document which has been recorded
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
      And The Vendor must clicks button "Edit" button from selected record on "Dokumen" form
      # And The Vendor will see pop-up form of "Edit Dokumen" which appear in front of "Dokumen" form
      And The Vendor will see information which state for every changes should be re-check by verificator 
      """
      {
         "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
      }
      """
      And The Vendor can modify data which displayed on "Dokumen" form 
      """
      {
      
         "no"				  	: "be.visible; state : disable",
         "namaDokumen"			: "Akta Pendirian Perusahaan", 
         "berlakuSampai"        : "seumur hidup"
         "lampiran"				: "browse"
          						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB
           
         
      }
      """
      And The Vendor must click "Simpan" button to save information of "Dokumen" 
      And The Vendor will see that update pop-up form already closed when clicks "Simpan"
      And The Vendor will see list of modified "Dokumen" on "Dokumen Grid"
      """
      {
      	 "No | Nama Dokumen                | Berlaku Dari | Berlaku Sampai | Lampiran                 | Action      "
         "----------------------------------------------------------------------------------------------------------"
         "1 .| Akta Pendirian Perusahaan   | Seumur Hidup | Seumur Hidup   | [Link] aktapendirian.pdf | Edit Delete "
         "2 .| KTP Direktur                | 01-01-2012   | Seumur Hidup   | [Link] ktpDirektur.pdf   | Edit Delete "
         "3 .| NPWP Perusahaan             | 01-01-2012   | Seumur Hidup   | [Link] npwpPerusahaan.pdf| Edit Delete "
       
          
      }
      """
      And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Dokumen" on "Dokumen Grid"
    Then The Vendor already modify her or his company information by editing recorded "Dokumen"  

  #edit existing document 	
  Scenario: Lampiran file more than 2 MB
    Given The Vendor wants to edit selected document which has been recorded 
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
      And The Vendor must clicks button "Edit" button from selected record on "Dokumen" form
      # And The Vendor will see pop-up form of "Edit Dokumen" which appear in front of "Dokumen" form
      And The Vendor will see information which state for every changes should be re-check by verificator 
      """
      {
         "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
      }
      """
      And The Vendor can modify data which displayed on "Dokumen" form with document more than 2 MB
      """
      {
      
         "no"				  	: "be.visible; state : disable",
         "namaDokumen"			: "Akta Pendirian Perusahaan", 
         "berlakuSampai"        : "seumur hidup"
         "lampiran"				: "browse"
          						   #dokumen dapat berupa JPG, PNG, PDF, maks 2MB
           
         
      }
      """
      And The Vendor must click "Simpan" button to save information of "Dokumen"
    Then The Vendor can not continue to add document information "Dokumen"