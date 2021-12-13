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
        And The Vendor will see pop-up form of "Tambah Pegawai" which appear in front of "Pegawai" form 
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

    #manage company profile Adding "Pegawai"
    Scenario: Negatif Scenario for adding information in regards to "Pegawai" 
        Given The Vendor still on "Informasi Perusahaan" form 
        When The Vendor already define information from "Informasi Perusahaan" 
        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
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
        And The Vendor must click "Simpan" button to save information of "Pegawai"
        And The Vendor will get warning message tooltip on form "Pegawai" 
        Then The Vendor must define right information from "Pegawai" while can continue to next process to define "Informasi Perusahaan"

Scenario: Negatif Scenario for Uploading Resume (Check Size) 
        Given The Vendor still on "Informasi Perusahaan" form 
        When The Vendor already define information from "Informasi Perusahaan"
        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        And The Vendor can modify data which displayed on "Pegawai" form with document more than 2 MB 
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
        Then The Vendor can not continue to add document information "Pegawai"

    Scenario: Negatif Scenario for Uploading Resume (Check File Extention) 
        Given The Vendor still on "Informasi Perusahaan" form 
        When The Vendor already define information from "Informasi Perusahaan"
        And The Vendor wants to add information in regards to "Pegawai" on "Pegawai Grid" which part of "Informasi Perusahaan" form 
        And The Vendor must clicks button "Tambah" where found on the left-buttom of "Pegawai Grid" to add records information in regards to "Pegawai"
        And The Vendor can modify data which displayed on "Pegawai" form with invalid file extension 
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
        Then The Vendor can not continue to add document information "Pegawai"