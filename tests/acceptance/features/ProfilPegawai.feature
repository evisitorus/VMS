# language: en
# workflow
Feature: Vendor Basic - Completed vendor information - Company Profile 

    As a vendor basic 
    I want to completed company information
    So that I can upgrade my company level to vendor pro

    Background: 
      Given The Vendor already login to VMS Portal

    #manage company profile Adding "Pegawai"
    Scenario: Positif Scenario for adding information in regards to "Pegawai" 
        Given The Vendor still on "Informasi Perusahaan" form 
        When The Vendor already define information from "Informasi Perusahaan"
        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form 
        """
        {

            "no"				: "autonumber",
            "NIK"				: "1234567",
            "namaKaryawan"      : "James Bucky Barnes",
            "TipeKaryawan" 		: "pilih salah satu opsi sebagai Tenaga Ahli atau Tenaga Terampil atau Tenaga Administrasi",
            "jabatan"			: "CTO",  
                                    #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
            "BidangPekerjaan"	: "Teknologi Informasi", 
                                    #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
            "Resume"			: "browse upload", 
                                    #ekstensi file pdf, doc, docx dengan maksimum 20MB

            }
            """
            And The Vendor must click "Simpan" button to save information of "Pegawai" 
            And The Vendor will see that pop-up form already closed when clicks "Simpan"
            And The Vendor will see first 5 lists of "Pegawai" on "Pegawai Grid"
            """
            {
            "No | NIK       | Nama Pegawai         | Tipe Karyawan 	    | Jabatan     | Bidang Pekerjaan      | Resume        |Action       "
            "----------------------------------------------------------------------------------------------------------------------------------"
            "1 .| 1234567   | James Bucky Barnes   | Tenaga Ahli         | CTO	      | Teknologi Informasi   | CV_Barnes.pdf | Edit Delete "
            "2 .| 8901234   | Sharon Charter       | Tenaga Administrasi | Spv Admin	  | Human Resources       | CV_Charter.pdf| Edit Delete "
            "3 .| 3456789   | Phil Coulson	      | Tenaga Terampil     | Agent    	  | Operasional           | CV_Coulson.pdf| Edit Delete "

            }
            """
            And The Vendor can "scroll down" the "scroll button" where found on the right-side of grid to see another list of "Pegawai" on "Pegawai Grid"
            And The Vendorcan add another "pegawai" by repeating process from line 21 to 46 
        Then The Vendor can continue to fill information in regards to "Pegawai" by clicking "Tambah Pegawai" button where placed on the right-buttom of "Pegawai" Grid
        #scenario will be define on 1a. VMS_Profil Perusahaan_SaveAllInformation.feature

    #manage company profile Adding "Pegawai"
    Scenario: Negatif Scenario for adding information in regards to "Pegawai" 
        Given The Vendor still on "Informasi Perusahaan" form 
        When The Vendor already define information from "Informasi Perusahaan" 
        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        # And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor not define anything on "Tambah Pegawai" form only define several fields which needed
            """
            {

            "no"				  	: "autonumber",
            "NIK"				: "1234567",
            "namaKaryawan"  		: "empty",
            "TipeKaryawan" 		: "pilih salah satu opsi sebagai Tenaga Ahli atau Tenaga Terampil atau Tenaga Administrasi",
            "jabatan"			: "not selected",
            "BidangPekerjaan"	: "empty"
            "Resume"				: "browse upload", 
                                    #ekstensi file pdf, doc, docx dengan maksimum 20MB
            }
            """
        And The Vendor will get warning message tooltip on each mandatory fields as "namaField tidak boleh kosong" 
        Then The Vendor must define right information from "Pegawai" while can continue to next process to Save all information in regards to "Informasi Perusahaan"

    Scenario Outline: The Vendor add information to Pegawai form with the wrong format file
        Given The Vendor still on "Informasi Perusahaan" form 
        When The Vendor already define information from "Informasi Perusahaan"
        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"

        And The Vendor input "NIK" with value "<nik>"
        And The Vendor input "First Name" with value "<first name>"
        And The Vendor input "Last Name" with value "<last name>"
        And The Vendor input "Tipe Karyawan" with value "<tipe karyawan>"
        And The Vendor input "Jabatan" with value "<jabatan>"
        And The Vendor input "Bidang Pekerjaan" with value "<bidang pekerjaan>"
        And The Vendor attach file "Resume" with value "<resume>"
        And The Vendor will get error message "<copywriting>"
        And The Vendor must click "Simpan" button to save information of "Riwayat Pekerjaan"
        Then The Vendor can not continue to add document information
        
        Examples:
            | case              | result  |   nik   | first name | last name | tipe karyawan | jabatan | bidang pekerjaan | resume                                    | copywriting	                                                   |
            | [negative case]   | failed  | 112233  |    John    |   Doe     | Tenaga Ahli   |  Staff  |       IT         | ./tests/acceptance/_fixture/image.gif     | File type not allowed.  |
            | [negative case]   | failed  | 332211  |    Jane    |   Doe     | Tenaga Ahli   |  Staff  |       IT         | ./tests/acceptance/_fixture/image_3mb.png | Maksimum ukuran file adalah 2MB                                |

    # #manage company profile Adding "Pegawai"
    # Scenario: Negatif Scenario for Uploading Resume (Check Size) 
    #     Given The Vendor still on "Informasi Perusahaan" form 
    #     When The Vendor already define information from "Informasi Perusahaan" 
    #     And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
    #     And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
    #     And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
    #     And The Vendor has been define "NIK", "Nama Karyawan", "Tipe Karyawan", "Jabatan", "Bidang Pekerjaan"
    #     And The Vendor uploads "Resume" with size more than 20 MB 
    #     And The Vendor will get warning message tooltip on Resume as "Maksimum Ukuran File adalah 20 MB" 
    #     Then The Vendor must upload "Resume" with size under or equals to 20 MB  while The Vendor can continue to next process to define "Tambah Pegawai"

    # #manage company profile Adding "Pegawai"
    # Scenario: Negatif Scenario for Uploading Resume (Check File Extention) 
    #     Given The Vendor still on "Informasi Perusahaan" form 
    #     When The Vendor already define information from "Informasi Perusahaan" 
    #     And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
    #     And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
    #     And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
    #     And The Vendor has been define "NIK", "Nama Karyawan", "Tipe Karyawan", "Jabatan", "Bidang Pekerjaan"
    #     And The Vendor uploads "Resume" with extention not in "pdf" or "doc" or "docx" format
    #     And The Vendor will get warning message tooltip on Resume as "Ekstensi file harus berformat pdf, doc, docx " 
    #     Then The Vendor must upload "Resume" with size under or equals to 20 MB  while The Vendor can continue to next process to Save all information in regards to "Informasi Perusahaan"