#language: en
#workflow
Feature: Vendor - Penambahan Progress Badge Untuk Vendor 

  #Vendor yang baru melakukan aktivasi dan hanya menginputkan data NPWP, Nama Perusahaan, Alamat Email dan No. Telepon 
   Scenario: Progress for New Vendor  
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page for the first time 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic" 
     Then The Vendor will get notice of progress as "95 % menuju Vendor Pro" under the badge 
      
 #Vendor yang telah melengkapi Informasi Perusahaan 
   Scenario: Progess for update company information 
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Informasi Perusahaan" 
     Then The Vendor will get notice of progress as "75 % menuju Vendor Pro" under the badge
 
 #Vendor yang telah melengkapi PIC Perusahaan
   Scenario:Progress for update PIC information 
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Informasi Perusahaan" 
     Then The Vendor will get notice of progress as "70 % menuju Vendor Pro" under the badge
      
 #Vendor yang telah melengkapi Dokumen 
   Scenario: Progress for update documents information 
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Dokumen" 
     Then The Vendor will get notice of progress as "60 % menuju Vendor Pro" under the badge
 
 #Vendor yang telah melengkapi Alamat 
   Scenario: Progress for update address information 
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Alamat" 
     Then The Vendor will get notice of progress as "50 % menuju Vendor Pro" under the badge
 
 #Vendor yang telah melengkapi Laporan Keuangan 
   Scenario: Progress for update financial report
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Laporan Keuangan" 
     Then The Vendor will get notice of progress as "30 % menuju Vendor Pro" under the badge
      
 #Vendor yang telah melengkapi Riwayat Pekerjaan 
   Scenario: Progress for update projects history 
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Riwayat Pekerjaan" 
     Then The Vendor will get notice of progress as "20 % menuju Vendor Pro" under the badge
 
 #Vendor yang telah melengkapi Asset
   Scenario: Progress for update assets
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor added information in regards to "Asset" 
     Then The Vendor will get notice of progress as "5 % menuju Vendor Pro" under the badge
 
 #Vendor telah mendapatkan verifikasi dari verifikator
   Scenario: Progress for state that all information already verified by verificator
    Given The Vendor already register and activated his/her VMS company account 
     When The Vendor log in into the VMS page 
       And The Vendor will be flag as "Aktif"
       And The Vendor will get badge as "Vendor Basic"
       And The Vendor information already approved and verified by verificator 
     Then The Vendor will get badge as "Vendor Pro" and will get status as "Terverifikasi" and will get full star on the badge 