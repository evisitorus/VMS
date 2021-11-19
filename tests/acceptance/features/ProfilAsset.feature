# language: en

# workflow
Feature: Vendor Basic - Completed vendor information 

    As a vendor basic 
    I want to completed company information
    So that I can upgrade my company level to vendor pro 

 #manage Asset
  Scenario: Positif Scenario for Manage Asset
    Given The Vendor (Basic) already add information in regards to "Riwayat Pekerjaan"
     When The Vendor (Basic) wants manage "Asset" from the Company
      And The Vendor (Basic) must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor (Basic) must click "Asset" Tab 
      And The Vendor (Basic) will see "Asset" form 
      
      #1
      And The Vendor (Basic) wants to add information in regards to "Asset" on "Asset Grid" which part of "Asset" form 
      And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Asset Grid" to add records information in regards to "Asset"
      And The Vendor (Basic) will see pop-up form of "Tambah Asset" which appear in front of "Asset" form
      """
      {
      
        "namaAsset"         : "Crane", 
                               #maksimal karakter 100 karakter alpha-numerik,jika melebihi maka objek terkunci
        "jumlah"			: "100 unit", 
                               #maksimal karakter 50 karakter numerik,jika melebihi maka objek terkunci
        "tahunPembuatan"    : "2012"
                               #maksimal karakter 10 karakter numerik,jika melebihi maka objek terkunci
      }
      """
      And The Vendor (Basic) must click "Simpan" button to save information of "Asset" 
      And The Vendor (Basic) will see that pop-up form already closed when she/he clicks "Simpan"
      And The Vendor (Basic) will see list of "Asset" on "Asset Grid"
      """
      {
      	 "No | Nama Asset      |Jumlah (Unit) 		| Tahun Pembuatan  | Action      "
         "---------------------------------------------------------------------------"
         "1 .| Crane           | 100                | 2012             | Edit Delete "             
      }
      """
      #repeat process 1 to add another "Asset"
     
      And The Vendor (Basic) must click "Simpan" button where found on the left-buttom of "Asset" form 
      And The Vendor (Basic) will see confirmation message 
      """
      {
      
        "message" : "Simpan Asset ?",
        "option"  : "Yes/No"
      }
      """
      And The Vendor (Basic) must select "Yes" option
      And The Vendor (Basic) will see progress of upgrade level on "Vendor Dashboard"
      """
      {
         
          "vendorLevel"  : "Vendor Basic",
          "progressLevel : "5% menuju Vendor Pro"
          "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
      }
      """
    Then The Vendor (Basic) already manage Asset from his/her company