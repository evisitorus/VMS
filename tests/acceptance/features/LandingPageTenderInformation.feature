#language: en
# workflow
Feature: User - Tender Information 

  As an User 
  I want see Tender Information 
  So that I can get more information in regards to Tender that posted on VMS

   Scenario: Tender Information (Default as Card List)
    Given The User is on VMS Landing Page  
     When The User accesses "Informasi Pengadaan" section 
       And The User will see first ten list of Tenders which conduct by BUMN on "Tender Informations Board" as default state
       #sort by newest tender
       """
       { 
           
           "logoPerusahaan"   	  : "be.visible", 
           "namaPerusahaan"  	  : "be.visible", 
           "namaTender"		  	  : "be.visible",
           "statusTender"	  	  : "be.visible",
           "metodeTender"	  	  : "be.visible",
           "batasAkhirRegistrasi" : "be.visible",
           "nilaiHPS"		      : "be.visibile",
           "lokasi"			      : "be.visible",
           "bidangUsaha"		  : "be.visible",
           "tanggalPosting"	      : "be.visible",
           #note information display 5 row x 2 column 
       }
       """
       And The User can move to another page by clicking "pagination button"  to next 10 list of Tenders
    #  Then The User can see list of Tender on "Tender Informations Board" 
