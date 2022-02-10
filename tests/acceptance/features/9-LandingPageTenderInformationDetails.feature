#language: en
#workflow
Feature: User - Tender Information Details

As an User 
I want see Tender Information 
So that I can get more information in regards to Tender that posted on VMS

   Scenario: Tender Information Details from selected Tender 
    Given The User is on VMS Landing Page  
     When The User accesses "Informasi Pengadaan" section 
      And The User will see first ten list of Tenders which conduct by BUMN on "Tender Informations Board" as default state
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
       And The User selects one of "Tender" from "Tender Information Board" 
       And The User will brings to "Tender Information Details" form from selected "Tender"
       """
       {
       
          "header"  		      : "Informasi Umum",
          "namaTender"			  : "be.visible",
          "kodeTender"			  : "be.visible",
          "metodeTender"          : "be.visible",
          "bidangUsaha"			  : "be.visible",
          "batasAkhirRegistrasi"  : "be.visilbe",
          "batasAkhirPenawaran"   : "be.visible",
          "lokasi"				  : "be.visible",
          "catatan"				  : "be.visible",
          "targetTKDN"			  : "be.visible",
          "tanggalPosting"		  : "be.visible",
          
         #  "subheader" 		      : "PIC",
         #  "picPengadaan"		  : "be.visible",
         #  "email" 			      : "be.visible",
         #  "phone"				  : "be.visible",
         #  "mobile"				  : "be.visible",
          
         #  "subheader"			  : "BUMN Penyelenggara",
         #  "namaBUMN"			  : "be.visible",
         #  "portalPengadaan"	      : "be.visible
       }
       """
     Then The User can see details information from selected Tender 