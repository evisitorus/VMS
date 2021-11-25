#language: en
#workflow
Feature: Vendor Basic - Verification Request

As a vendor basic 
I want to ask verify for information that has been define on VMS 
So that I can get "Vendor Pro" badge and follow the Tender which conducted by BUMN(s)
 
  #Asking Verification 
  Scenario: Positif Scenario for asking verification 
    Given The Vendor (Basic) already add all vendor information likes "Profil Perusahaan", "PIC", "Dokumen", "Alamat", "Laporan Keuangan", "Riwayat Pekerjaan" also "Asset" 
     When The Vendor (Basic) wants to send all information for verification process 
      And The Vendor (Basic) must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor (Basic) must click "Verifikasi Kelengkapan" Tab 
      And The Vendor (Basic) will see "Verifikasi Kelengkapan" form 
      And The Vendor (Basic) should make sure that checklist from each part of information has been defined 
      """
      {
         "ProfilPerusahaan" : "true", 
         "PICPerusahaan"    : "true",
         "Alamat"			: "true", 
         "LaporanKeuangan"  : "true", 
         "RiwayatPekerjaan" : "true", 
         "Asset"			: "true"
      
      }
      """
      And The Vendor (Basic) must check "Pernyataan" checklist 
      """
      {
      
         "checklist"       : "true",
         "statement"	   : "Dengan ini kami menyatakan bahwa informasi yang dikirimkan adalah BENAR"
      }
      """
      And The Vendor (Basic) must click button "Rekam Data"
      And The Vendor (Basic) will see confirmation pop-up message 
      """
      {
         "message"  : "(nama Perusahaan), data Anda telah Kami rekam dan sedang dalam antrian untuk Verifikasi"
         "button"   : "Yes"
      }
      """
      And The Vendor (Basic) must select button "Yes" which appear on pop-up message 
     Then The Vendor (Basic) will get email which stated that data is on verification

#template email waiting for verification process: https://gitlab.playcourt.id/b2b-squad/padi-e-proc/vms/-/blob/master/LoFi-Mockup/VendorPortal/11a._Email_Menunggu_Verifikasi.png 
 
  #Asking Verification 
  Scenario: Several information unchecked 
    Given The Vendor (Basic) already add all vendor information likes "Profil Perusahaan", "PIC", "Dokumen", "Alamat", "Laporan Keuangan", "Riwayat Pekerjaan" also "Asset" 
     When The Vendor (Basic) wants to send all information for verification process 
      And The Vendor (Basic) must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor (Basic) must click "Verifikasi Kelengkapan" Tab 
      And The Vendor (Basic) will see "Verifikasi Kelengkapan" form 
      And The Vendor (Basic) should make sure that checklist from each part of information has been defined 
      """
      {
         "ProfilPerusahaan" : "false", 
         "PICPerusahaan"    : "true",
         "Alamat"			: "false", 
         "LaporanKeuangan"  : "true", 
         "RiwayatPekerjaan" : "true", 
         "Asset"			: "true"
      
      }
      """
      And The Vendor (Basic) must check "Pernyataan" checklist 
      """
      {
      
         "checklist"       : "true",
         "statement"	   : "Dengan ini kami menyatakan bahwa informasi yang dikirimkan adalah BENAR"
      }
      """
      And The Vendor (Basic) must click button "Rekam Data"
      And The Vendor (Basic) will see confirmation pop-up message 
      """
      {
         "message"  : "Mohon maaf data Anda tidak bisa kami rekam, silahkan cek kembali data perusahaan anda!."
         "button"   : "close" 
      }
      """
      And The Vendor (Basic) must select button "close" which appear on pop-up message 
     Then The Vendor (Basic) should check previous form and complete it
     
  #template email will be visualize on LoFi mockup on part of Vendor Portal Form 
      
  #Asking Verification 
  Scenario: Pernyataan uncheck 
    Given The Vendor (Basic) already add all vendor information likes "Profil Perusahaan", "PIC", "Dokumen", "Alamat", "Laporan Keuangan", "Riwayat Pekerjaan" also "Asset" 
     When The Vendor (Basic) wants to send all information for verification process 
      And The Vendor (Basic) must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor (Basic) must click "Verifikasi Kelengkapan" Tab 
      And The Vendor (Basic) will see "Verifikasi Kelengkapan" form 
      And The Vendor (Basic) should make sure that checklist from each part of information has been defined 
      """
      {
         "ProfilPerusahaan" : "true", 
         "PICPerusahaan"    : "true",
         "Alamat"			: "true", 
         "LaporanKeuangan"  : "true", 
         "RiwayatPekerjaan" : "true", 
         "Asset"			: "true"
      
      }
      """
      And The Vendor (Basic) uncheck "Pernyataan" checklist 
      """
      {
      
         "checklist"       : "false",
         "statement"	   : "Dengan ini kami menyatakan bahwa informasi yang dikirimkan adalah BENAR"
      }
      """
      And The Vendor (Basic) must click button "Rekam Data"
      And The Vendor (Basic) will see confirmation pop-up message 
      """
      {
         "message"  : "Mohon maaf data Anda tidak bisa kami rekam, silahkan checklist kolom Pernyataan sebelum merekam data!."
         "button"   : "close" 
      }
      """
      And The Vendor (Basic) must select button "close" which appear on pop-up message 
     Then The Vendor (Basic) should check previous form and complete it