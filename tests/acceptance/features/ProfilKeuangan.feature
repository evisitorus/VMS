#language: en
#workflow
Feature: Vendor Basic - Completed vendor information 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 

 #manage Keuangan
  Scenario: Define Bank Information 
    Given The Vendor (Basic) already add information in regards to "Alamat"
     When The Vendor (Basic) wants manage "Informasi Keuangan" from the Company
      And The Vendor (Basic) must click "Informasi Keuangan" menu where found on "Side Menu" of "Vendor Dashboard"
      And The Vendor (Basic) will see "Informasi Keuangan" form
      And The Vendor (Basic) wants to add "Bank Information" on sub form of "Bank" at "Informasi Keuangan" form
      And The Vendor (Basic) must define following information 
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
    Then The Vendor (Basic) can continue to fill information in regards to "Neraca Keuangan" by clicking "Tambah Neraca" button where placed on the right-buttom of "Neraca Keuangan" Grid
 
 #manage Keuangan
  Scenario: Fill several information / empty data for Bank Information 
    Given The Vendor (Basic) already add information in regards to "Alamat"
     When The Vendor (Basic) wants manage "Informasi Keuangan" from the Company
      And The Vendor (Basic) must click "Informasi Keuangan" menu where found on "Side Menu" of "Vendor Dashboard"
      And The Vendor (Basic) will see "Informasi Keuangan" form
      And The Vendor (Basic) wants to add "Bank Information" on sub form of "Bank" at "Informasi Keuangan" form
      And The Vendor (Basic) must define following information 
      """
      {
      
          "namaBank"      : "empty"
          "cabang"        : "Utama Wisma BNI 46 Kota",
          "nomorRekening" : "1234567",
          "atasNama"     :  "empty"
      }
      """
     And The Vendor move to the next input
	Then The Vendor (Basic) will get warning message tooltip on each mandatory fields as "{namaField} tidak boleh kosong"