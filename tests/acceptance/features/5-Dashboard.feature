# language: en
# workflow
Feature: Vendor - Dashboard

As a registered Vendor  
I want to check my dashboard
So that I can get a summarize on tender, my company status and progress in completing information
 
 
  Scenario:
    Given The Vendor already login to VMS Portal
     When The Vendor see dashboard page
     Then The Vendor will get a summary information of Tender
   	  """
      {
          "totalTender"     : "be.visible", 
          "tenderDiikuti"   : "be.visible", 
          "tenderBerjalan"  : "be.visible",
	      "tenderDitolak"   : "be.visible"
      }
      """ 
      And The Vendor will shown graphical and information of vendor status 
      """
      {
          "displayStatusStar" 	: "be.visible"
	      "terdaftarSejak"	    : "tanggal terdaftar"
	      "pengkinianTerakhir"	: "tanggal pengkinian terakhir"
	      "terverifikasiSejak"	: "tanggal verifikasi"
      }
      """

      And The Vendor will shown progress of completion on each aspect 
      """
      {
          "aspect"                      : "be.visible"
	      "statusPengisianData"	        : "completed/updated/incompleted"
	      "statusPengajuanVerifikasi"	: "kosong jika belum mengajukan / 'Pengajuan pada 10 Maret 2022' / 'Terverifikasi pada 12 Maret 2022'"
      }
      """    
    Then The Vendor already see summary information of his or her company level on dashboard