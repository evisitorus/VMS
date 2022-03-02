#language: en
#workflow
Feature: Vendor Basic - Completed vendor information 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 

    Background: 
        Given The Vendor already login to VMS Portal

 #manage Keuangan
    Scenario: Positif Scenario for adding information in regards to Neraca Keuangan
        Given The Vendor still on "Laporan Keuangan" form 
        When The Vendor already define information from "Informasi Bank"
        And The Vendor wants to add information in regards to "Neraca Keuangan" on "Neraca Keuangan Grid" which part of "Laporan Keuangan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Neraca Keuangan Grid" to add records information in regards to "Neraca Keuangan"
        And The Vendor will see pop-up form of "Tambah Neraca" which appear in front of "Neraca Keuangan" form
            """
            {
            "Tahun"	   : "2015", 
                            #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
            "Aktiva"    : "Rp. 1.000.000.000"
                            #prefiks Rp. muncul otomatis, diinputkan dengan karakter bertipe integer 
            "Pasiva"    : "Rp. 1.000.000.000"
                            #prefiks Rp. muncul otomatis, diinputkan dengan karakter bertipe integer 
            "Ekuitas"   : "Rp. 1.000.000.000"
                            #prefiks Rp. muncul otomatis, diinputkan dengan karakter bertipe integer 
            "nettOmzet" : "Rp. 1.000.000.000"
                            #prefiks Rp. muncul otomatis, diinputkan dengan karakter bertipe integer 

            }
            """
        And The Vendor must click "Simpan" button to save information of "Neraca Keuangan"