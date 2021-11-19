#language: en
#workflow
Feature: Vendor - Flag Status of Vendor
	#-------------------------------------------------------------------------
    # Vendor - #Flag Status
    #-------------------------------------------------------------------------

  #Definisi flag "Terdaftar" adalah Vendor yang sudah melakukan Registrasi pada laman VMS  
  Scenario:
    Given The Vendor already fill the VMS registration form
     When The Vendor clicks "disclaimer" statement   
      And The system clicks "Daftar" button on VMS registration form
     Then The Vendor data will be stored at database and will be flag as "Terdaftar" 

  #Vendor Aktif adalah Vendor yang sudah melakukan registrasi dan aktivasi namun belum melengkapi informasi dan memiliki predikat sebagai Vendor Basic
   Scenario:
    Given The Vendor already register his or her VMS company account 
     When The Vendor clicks "activated" link which sent to his or her email account 
      And The Vendor define credential access by defining his or her password for VMS 
      And The Vendor try to log-in to VMS by using his or her new VMS account 
     Then The Vendor will be flag as "Aktif" also will get "Vendor Basic" badge 
       
  #Definisi Vendor Terverifikasi adalah Vendor yang sudah melakukan registrasi, aktivasi dan melengkapi informasi serta telah mendapatkan predikat sebagai Vendor Pro 
  Scenario:
    Given The Vendor already register and activated his or her VMS company account  
     When The Vendor already completed information in regards to its company on VMS Vendor Portal 
      And The Vendor already verified by VMS verificator 
     Then The Vendor will be flag as "Terverifikasi" also will get "Vendor Pro" badge 
