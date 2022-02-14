#language: en
#workflow
Feature: Vendor Basic - Completed vendor information 

As a vendor basic 
I want to completed company information
So that I can upgrade my company level to vendor pro 

    Background: 
        Given The Vendor already login to VMS Portal

 #manage Keuangan
    Scenario: Positif Scenario for adding information in regards to SPT Tahunan
      Given The Vendor still on "Laporan Keuangan" form 
       When The Vendor already define information from "Informasi Bank", "Neraca Keuangan"
        And The Vendor wants to add information in regards to "SPT Tahunan" on "SPT Tahunan" which part of "Informasi Keuangan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "SPT Tahunan Grid" to add records information in regards to "SPT Tahunan"
        And The Vendor will see pop-up form of "Tambah SPT Tahunan" which appear in front of "SPT Tahunan" form
            """
            {
            "Tahun"	 	: "2015", 
                                #jumlah karakter maksimum 4 karakter numerik jika melebihi maka objek terkunci
            "nomorDokumen" : "12340"
                                #jumlah karakter maksimum 25 karakter numerik jika melebihi maka objek terkunci
            "Lampiran"     : "browse" "spt2015.pdf"
                                #lampiran dapat berupa JPG, PNG, PDF, maks 2MB

            }
            """
        And The Vendor must click "Simpan" button to save information of "SPT Tahunan" 
        And The Vendor will see that pop-up form already closed when she or he clicks "Simpan"  
        And The Vendor will see first 5 lists of "SPT Tahunan" on "SPT Tahunan Grid"
            """
            {
            "No | Tahun   | Nomor Dokumen 		   | Lampiran 		     | Waktu Upload                                                  | Action      "
            "-----------------------------------------------------------------------------------------------------------------------------------------"
            "1 .| 2015    | 12340                 | [Link] spt2015.pdf  | set as waktu upload sistem by default today dd-mm-yy hh:mm:ss | Edit Delete "
            "1 .| 2016    | 12341                 | [Link] spt2016.pdf  | set as waktu upload sistem by default today dd-mm-yy hh:mm:ss | Edit Delete "
            "1 .| 2017    | 12342                 | [Link] spt2017.pdf  | set as waktu upload sistem by default today dd-mm-yy hh:mm:ss | Edit Delete "

            }
            """
            And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "SPT Tahunan" on "SPT Tahunan Grid"
            And The Vendorcan add another "SPT Tahunan" by repeating process from line 20 to 47 
        Then The Vendor can continue to fill information in regards to "Modal" where placed on the last part of "Laporan Keuangan" Form
        #modal scenario will be define on 1e. VMS_ManageLaporanKeuangan_Modal.feature
        
    #manage Keuangan
    Scenario: Check file format for Lampiran
        Given The Vendor is on "Tambah SPT Tahunan" pop-up form
        And The Vendor has been define "Tahun", "nomorDokumen"
        And The Vendor upload "Lampiran" with not jpg, png or pdf format 
        And The Vendor move to the next input
        Then The Vendor will get warning message tooltip on each mandatory fields as "Lampiran harus dalam format JPG, PNG atau PDF" 

    #manage Keuangan
    Scenario: Check file size for Lampiran
        Given The Vendor is on "Tambah SPT Tahunan" pop-up form
        And The Vendor has been define "Tahun", "nomorDokumen"
        And The Vendor upload "Lampiran" with size more than 20MB 
        And The Vendor move to the next input
        Then The Vendor will get warning message tooltip on each mandatory fields as "Maksimum upload file 20 MB" 