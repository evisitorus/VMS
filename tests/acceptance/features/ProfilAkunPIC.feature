# language: en

# workflow
Feature: Vendor Basic - Completed vendor information

    As a vendor basic 
    I want to completed company information
    So that I can upgrade my company level to vendor pro 

 #manage PIC
  Scenario: Positive Scenario for Manage PIC 
    Given The Vendor (Basic) already add information in regards to "Profil Perusahaan"
     When And The Vendor (Basic) must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor (Basic) must click "PIC" Tab 
      And The Vendor (Basic) will see "Akun PIC" form 
      And The Vendor (Basic) must define avatar from his/her account where found on "Akun PIC" form 
      """
      {
         "avatar"       : "browse",
                           #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb
                            
         "email"        : "diambil dari alamat email yang diinputkan vendor pada saat mendaftar",  
                           #object disable
                    
         "noHandphone"  : "diambil dari no handphone yang diinputkan vendor pada saat mendaftar",  
         "password"		  : "Harap ganti kata sandi secara berkala untuk meningkatkan keamanan akun"
      }
      """
      And The Vendor (Basic) must click "Simpan" button where found on the left-buttom of "Akun PIC" form 
      And The Vendor (Basic) will see confirmation message 
      """
      {
      
        "message" : "Simpan akun PIC perusahaan ?",
        "option"  : "Yes/No"
      }
      """
      And The Vendor (Basic) must select "Yes" option 
      And The Vendor (Basic) will see progress of upgrade level on "Vendor Dashboard"
      """
      {
         
          "vendorLevel"  : "Vendor Basic",
          "progressLevel : "70% menuju Vendor Pro"
          "informasi"    : "Perhatian : Silahkan lengkapi profil anda agar bisa mendapatkan banyak keuntungan sebagai Vendor PaDi"
      }
      """
    Then The Vendor (Basic) already manage her/his company information by adding "Akun PIC" 

 #manage PIC
  Scenario: Avatar not in jpg / jpeg / png extension 
    Given The Vendor (Basic) already add information in regards to "Profil Perusahaan"
     When The Vendor (Basic) wants manage "Akun PIC" of VMS 
      And The Vendor (Basic) must clicks "Akun PIC" menu where found on "Side Menu" of "Vendor Dashboard"
      And The Vendor (Basic) will see "Akun PIC" form 
      And The Vendor (Basic) define avatar not in jpg / jpeg / png extension 
      """
      {
         "avatar"       : "browse",
                           #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb
                            
         "email"        : "diambil dari alamat email yang diinputkan vendor pada saat mendaftar",  
                           #object disable
                    
         "noHandphone"  : "diambil dari no handphone yang diinputkan vendor pada saat mendaftar",  
         "password"		: "Harap ganti password secara berkala untuk meningkatkan keamanan akun"
      }
      """
      And The Vendor (Basic) will warning message tooltip on avatar input as "Image harus berformat jpg, jpeg atau png" 
    Then The Vendor (Basic) can't continue to process saving data of "Akun PIC" due not suitable format on avatar 
    
 #manage PIC
  Scenario: Avatar not in jpg / jpeg / png extension 
    Given The Vendor (Basic) already add information in regards to "Profil Perusahaan"
     When The Vendor (Basic) wants manage "Akun PIC" of VMS 
      And The Vendor (Basic) must clicks "Akun PIC" menu where found on "Side Menu" of "Vendor Dashboard"
      And The Vendor (Basic) will see "Akun PIC" form 
      And The Vendor (Basic) define avatar with size more than 2 MB 
      """
      {
         "avatar"       : "browse",
                           #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb
                            
         "email"        : "diambil dari alamat email yang diinputkan vendor pada saat mendaftar",  
                           #object disable
                    
         "noHandphone"  : "diambil dari no handphone yang diinputkan vendor pada saat mendaftar",  
         "password"		: "Harap ganti password secara berkala untuk meningkatkan keamanan akun"
      }
      """
      And The Vendor (Basic) will warning message tooltip on avatar input as "Ukuran Image maksimal 2 MB" 
    Then The Vendor (Basic) can't continue to process saving data of "Akun PIC" due not suitable format on avatar 

