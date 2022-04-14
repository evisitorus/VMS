#language: en
#workflow
Feature: Vendor Basic - Completed vendor information 

  As a vendor basic 
  I want to completed company information
  So that I can upgrade my company level to vendor pro 

    Background: 
        Given The Vendor already login to VMS Portal

 #manage Keuangan
    Scenario: Define Bank Information 
      Given The Vendor already add information in regards to "Alamat"
       When The Vendor wants manage "Informasi Keuangan" from the Company
        And The Vendor must click "Informasi Keuangan" menu where found on "Side Menu" of "Vendor Dashboard"
        And The Vendor will see "Informasi Keuangan" form
        And The Vendor wants to add "Bank Information" on sub form of "Bank" at "Informasi Keuangan" form
        And The Vendor must define following information 
        """
        {
        
            "namaBank"      : "Bank BNI",
                                #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
                                
            "cabang"        : "Utama Wisma BNI 46 Kota",
                                #jumlah karakter maksimum 50 karakter alphanumerik jika melebihi maka objek terkunci
            
            "nomorRekening" : "1234567",
                                #jumlah karakter maksimum 50 karakter numerik jika melebihi maka objek terkunci
            
            "atasNama"     : "Anthony Stark"
                                #jumlah karakter maksimum 50 karakter alphanumerik jika melebihi maka objek terkunci
                        
        }
        """
        And The Vendor must click "Simpan" button to save information of "Keuangan"
        Then The Vendor can continue to fill information in regards to "Neraca Keuangan" by clicking "Tambah Neraca" button where placed on the right-buttom of "Neraca Keuangan" Grid
    
    #manage Keuangan
    Scenario: Fill several information / empty data for Bank Information 
        Given The Vendor already add information in regards to "Alamat"
        When The Vendor wants manage "Informasi Keuangan" from the Company
        And The Vendor must click "Informasi Keuangan" menu where found on "Side Menu" of "Vendor Dashboard"
        And The Vendor will see "Informasi Keuangan" form
        And The Vendor wants to add "Bank Information" on sub form of "Bank" at "Informasi Keuangan" form
        And The Vendor must define following information with empty field "Laporan Keuangan"
        """
        {
        
            "namaBank"      : "empty"
            "cabang"        : "Utama Wisma BNI 46 Kota",
            "nomorRekening" : "1234567",
            "atasNama"     :  "empty"
        }
        """
        # And The Vendor must click "Simpan" button to save information of "Keuangan"
        And The Vendor move to the next input
        Then The Vendor will get warning message tooltip on empty fields "Laporan Keuangan"