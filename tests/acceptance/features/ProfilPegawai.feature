# language: en
# workflow
Feature: Vendor Basic - Completed vendor information - Company Profile 

    As a vendor basic 
    I want to completed company information
    So that I can upgrade my company level to vendor pro 

    #manage company profile Adding "Pegawai"
    Scenario: Positif Scenario for adding information in regards to "Pegawai" 
        Given The Vendor (Basic) still on "Informasi Perusahaan" form 
        When The Vendor (Basic) already define information from "Informasi Perusahaan" also "Pemegang Saham" 
        And The Vendor (Basic) wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai" 
        """
        {

            "no"				  	: "autonumber",
            "NIK"				: "1234567",
            "namaKaryawan"  		: "James Bucky Barnes",
            "TipeKaryawan" 		: "pilih salah satu opsi sebagai Tenaga Ahli atau Tenaga Terampil atau Tenaga Administrasi",
            "jabatan"			: "CTO",  
                                    #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
            "BidangPekerjaan"	: "Teknologi Informasi", 
                                    #jumlah karakter maksimum 25 karakter alphanumerik jika melebihi maka objek terkunci
            "Resume"				: "browse upload", 
                                    #ekstensi file pdf, doc, docx dengan maksimum 20MB

            }
            """
            And The Vendor (Basic) will see first 5 (five) lists  of "Pegawai" on "Pegawai Grid"
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
        And The Vendor(Basic) can add another "pegawai" by repeating process from line 21 to 46 
        Then The Vendor (Basic) can continue to save data from "Informasi Pegawai"
        #scenario will be define on 1a. VMS_Profil Perusahaan_SaveAllInformation.feature

    #manage company profile Adding "Pegawai"
    Scenario: Negatif Scenario for adding information in regards to "Pegawai" 
        Given The Vendor (Basic) still on "Informasi Perusahaan" form 
        When The Vendor (Basic) already define information from "Informasi Perusahaan" 
        And The Vendor (Basic) wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        And The Vendor (Basic) will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor (Basic) not define anything on "Tambah Pegawai" form / only define several fields which needed
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
        And The Vendor (Basic) will get warning message tooltip on each mandatory fields as "{namaField} tidak boleh kosong" 
        Then The Vendor (Basic) must define right information from "Pegawai" while can continue to next process to Save all information in regards to "Informasi Perusahaan"

    #manage company profile Adding "Pegawai"
    Scenario: Negatif Scenario for Uploading Resume (Check Size) 
        Given The Vendor (Basic) still on "Informasi Perusahaan" form 
        When The Vendor (Basic) already define information from "Informasi Perusahaan" 
        And The Vendor (Basic) wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        And The Vendor (Basic) will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor (Basic) has been define "NIK", "Nama Karyawan", "Tipe Karyawan", "Jabatan", "Bidang Pekerjaan"
        And The Vendor (Basic) uploads "Resume" with size more than 20 MB 
        And The Vendor (Basic) will get warning message tooltip on Resume as "Maksimum Ukuran File adalah 20 MB" 
        Then The Vendor (Basic) must upload "Resume" with size under or equals to 20 MB  while The Vendor (Basic) can continue to next process to Save all information in regards to "Informasi Perusahaan"

    #manage company profile Adding "Pegawai"
    Scenario: Negatif Scenario for Uploading Resume (Check File Extention) 
        Given The Vendor (Basic) still on "Informasi Perusahaan" form 
        When The Vendor (Basic) already define information from "Informasi Perusahaan" 
        And The Vendor (Basic) wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor (Basic) must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        And The Vendor (Basic) will see pop-up form of "Tambah Pegawai" which appear in front of "Informasi Perusahaan" form
        And The Vendor (Basic) has been define "NIK", "Nama Karyawan", "Tipe Karyawan", "Jabatan", "Bidang Pekerjaan"
        And The Vendor (Basic) uploads "Resume" with extention not in "pdf" or "doc" or "docx" format
        And The Vendor (Basic) will get warning message tooltip on Resume as "Ekstensi file harus berformat pdf, doc, docx " 
        Then The Vendor (Basic) must upload "Resume" with size under or equals to 20 MB  while The Vendor (Basic) can continue to next process to Save all information in regards to "Informasi Perusahaan"