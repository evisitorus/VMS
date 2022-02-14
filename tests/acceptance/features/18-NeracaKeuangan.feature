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
        # And The Vendor will see that pop-up form already closed when she or he clicks "Simpan"
        # And The Vendor will see first 5 lists of "Neraca Keuangan" on "Neraca Keuangan Grid"
        #     """
        #     {
        #     "No | Tahun   | Aktiva 		     | Pasiva 		       | Ekuitas              | Nett-Omzet           | Action      "
        #     "-------------------------------------------------------------------------------------------------------------------"
        #     "1 .| 2015    | Rp. 1.000.000.000 | Rp. 1.000.000.000   | Rp. 1.000.000.000    | Rp. 1.000.000.000    | Edit Delete "
        #     "2 .| 2016    | Rp. 1.000.000.000 | Rp. 1.000.000.000   | Rp. 1.000.000.000    | Rp. 1.000.000.000    | Edit Delete "
        #     "3 .| 2017    | Rp. 1.000.000.000 | Rp. 1.000.000.000   | Rp. 1.000.000.000    | Rp. 1.000.000.000    | Edit Delete " 

        #     }
        
        #     """
        #     And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Neraca Keuangan" on "Neraca Keuangan Grid"
        # Then The Vendor can continue to fill information in regards to "SPT Tahunan" by clicking "Tambah SPT" button where placed on the right-buttom of "SPT Tahunan" Grid
        #spt tahunan scenario will be define on 1e. VMS_ManageLaporanKeuangan_GridSPTTahunan.feature
        
    #manage Keuangan
    # Scenario: Fill several information / empty data for Laporan Keuangan
    #     Given The Vendor is on "Tambah Neraca" pop-up form
    #     And The Vendor not define or only define several information on "Tambah Neraca" pop-up form 
    #     """
    #     {
    #         "Tahun"	   : "2015", 
    #         "Aktiva"    : "Rp. 1.000.000.000"
    #         "Pasiva"    : "empty"
    #         "Ekuitas"   : "empty"
    #         "nettOmzet" : "Rp. 1.000.000.000"
    #     }
    #     """
    #     And The Vendor move to the next input
    #     Then The Vendor will get warning message tooltip on each mandatory fields as "{namaField} tidak boleh kosong" 