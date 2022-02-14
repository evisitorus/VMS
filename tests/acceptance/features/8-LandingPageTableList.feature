# language: en
# workflow
Feature: User - Tender Information 

As an User 
I want see Tender Information 
So that I can get more information in regards to Tender that posted on VMS

   Scenario: Tender Information View as Table List 
    Given The User is on VMS Landing Page  
     When The User accesses "Informasi Pengadaan" section 
      And The User will see first ten list of Tenders which conduct by BUMN on "Tender Informations Board" as default state 
      And The User wants to change view of "Tender" as Table 
      And The User must clicks "Table Icon" button on "Informasi Pengadaan" section 
      And The User will list of "Tender" as "Table" 
       """
       {
       
         "namaTender"      		: "be.visible", 
         "namaPerusahaan"  		: "be.visible",
         "lokasi"		   		: "be.visible", 
         "nilaiHPS"        		: "be.visible",
         "batasAkhirRegistrasi" : "be.visible",
         "metodeTender"	  	  	: "be.visible",
         "bidangUsaha"		  	: "be.visible",
       }
       """
     Then The User can see list of Tender on "Tender Informations Board" as "Table List"