# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile 

As a Vendor  
I want to edit company information
So that I can modify my company information which has been recorded

    Background: 
        Given The Vendor already login to VMS Portal

    #Edit Existing "Pegawai"
    Scenario: Edit Selected record from Pegawai
        Given The Vendor still on "Informasi Perusahaan" form 
        And The Vendor wants to edit one of record from "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Edit" button from selected record on "Pegawai" form
        # And The Vendor will see pop-up form of "Edit Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor will see information which state for every changes should be re-check by verificator
        """
        {
            "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The Vendor can modify data which displayed on "Pegawai" form 
        """
        {

            "no"				: "be.visible; state : disabled",   
            "NIK"				: "1234567",
            "namaKaryawan"      : "James Bucky Barnes",
            "TipeKaryawan" 		: "Tenaga Ahli",
            "jabatan"			: "CIO",  
            "BidangPekerjaan"	: "IT", 
            "Resume"			: "browse upload", 
                                    #ekstensi file pdf, doc, docx dengan maksimum 20MB

            }
            """
            And The Vendor must click "Simpan" button to save information of "Pegawai" 
            And The Vendor will see that pop-up form already closed when clicks "Simpan"
            And The Vendor will see list of modified "Pegawai" on "Pegawai Grid"
            """
            {
            "No | NIK       | Nama Pegawai         | Tipe Karyawan 	    | Jabatan     | Bidang Pekerjaan      | Resume        |Action       "
            "----------------------------------------------------------------------------------------------------------------------------------"
            "1 .| 1234567   | James Bucky Barnes   | Tenaga Ahli         | CIO	      | IT				      | CV_Barnes.pdf | Edit Delete "
            "2 .| 8901234   | Sharon Charter       | Tenaga Administrasi | Spv Admin	  | Human Resources       | CV_Charter.pdf| Edit Delete "
            "3 .| 3456789   | Phil Coulson	      | Tenaga Terampil     | Agent    	  | Operasional           | CV_Coulson.pdf| Edit Delete "

            }
            """

    #Edit Existing "Pegawai"
    Scenario: Negatif Scenario for Uploading Resume (Check Size)
        Given The Vendor still on "Informasi Perusahaan" form 
        And The Vendor wants to edit one of record from "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Edit" button from selected record on "Pegawai" form
        # And The Vendor will see pop-up form of "Edit Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor will see information which state for every changes should be re-check by verificator
        """
        {
            "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verificator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The Vendor can modify data which displayed on "Pegawai" form with document more than 2 MB 
        """
        {

            "no"				  	: "be.visible; state : disabled",   
            "NIK"				: "1234567",
            "namaKaryawan"  		: "James Bucky Barnes",
            "TipeKaryawan" 		: "Tenaga Ahli",
            "jabatan"			: "CIO",  
            "BidangPekerjaan"	: "IT", 
            "Resume"				: "browse upload", 
                                    #ekstensi file pdf, doc, docx dengan maksimum 20MB

            }
            """
            And The Vendor must click "Simpan" button to save information of "Pegawai" 
            Then The Vendor can not continue to add document information "Pegawai"

    #Edit Existing "Pegawai"
    Scenario: Negatif Scenario for Uploading Resume (Check File Extention)
        Given The Vendor still on "Informasi Perusahaan" form 
        And The Vendor wants to edit one of record from "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Edit" button from selected record on "Pegawai" form
        # And The Vendor will see pop-up form of "Edit Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor will see information which state for every changes should be re-check by verificator 
        """
        {
            "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
        }
        """
        And The Vendor can modify data which displayed on "Pegawai" form with invalid file extension
        """
        {

            "no"				  	: "be.visible; state : disabled",   
            "NIK"				: "1234567",
            "namaKaryawan"  		: "James Bucky Barnes",
            "TipeKaryawan" 		: "Tenaga Ahli",
            "jabatan"			: "CIO",  
            "BidangPekerjaan"	: "IT", 
            "Resume"				: "browse upload", 
                                    #ekstensi file pdf, doc, docx dengan maksimum 20MB

            }
            """
            And The Vendor must click "Simpan" button to save information of "Pegawai" 
            Then The Vendor can not continue to add document information "Riwayat Pekerjaan"

#  #manage company profile Adding  new "Pegawai"
#  Scenario: Negatif Scenario for Uploading Resume (Check Size) 
#     Given The Vendor still on "Informasi Perusahaan" form 
#       When The Vendor already define information from "Informasi Perusahaan" 
#        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
#        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
#        And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
#        And The Vendor has been define "NIK", "Nama Karyawan", "Tipe Karyawan", "Jabatan", "Bidang Pekerjaan"
#        And The Vendor uploads "Resume" with size more than 20 MB 
#        And The Vendor will get warning message tooltip on Resume as "Maksimum Ukuran File adalah 20 MB" 
#       Then The Vendor must upload "Resume" with size under or equals to 20 MB  while The Vendor can continue to next process to Save all information in regards to "Informasi Perusahaan"

# #================================================================================================================================================

#  #manage company profile Adding new "Pegawai"
#  Scenario: Negatif Scenario for Uploading Resume (Check File Extention) 
#     Given The Vendor still on "Informasi Perusahaan" form 
#       When The Vendor already define information from "Informasi Perusahaan" 
#        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
#        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
#        And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
#        And The Vendor has been define "NIK", "Nama Karyawan", "Tipe Karyawan", "Jabatan", "Bidang Pekerjaan"
#        And The Vendor uploads "Resume" with extention not in "pdf" or "doc" or "docx" format
#        And The Vendor will get warning message tooltip on Resume as "Ekstensi file harus berformat pdf, doc, docx " 
#       Then The Vendor must upload "Resume" with size under or equals to 20 MB  while The Vendor can continue to next process to Save all information in regards to "Informasi Perusahaan"