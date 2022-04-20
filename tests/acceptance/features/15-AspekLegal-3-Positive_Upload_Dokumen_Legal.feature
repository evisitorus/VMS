# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #2 - Dokumen Legal
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor must click "Dokumen Legal Section" to expand "Dokumen Legal" form
        And The Vendor wants to add information in regards to "Dokumen Legal" on "Dokumen Legal Section" which part of "Aspek Legal" page
        Then The Vendor will see "Dokumen Legal Grid" form to add records regarding to "Dokumen Legal"
            """
            {
                "namaDokumen"  : "get document type from master data",
                "namaFile" : "document url link",
                "unggahBerkas"	  	: "browse file",
                #Format berkas pdf, doc, docx, jpg, atau png maksimal 2 mb
            }
            """

        And The Vendor must uploading document based on "Nama Dokumen"
            """
            {
                "companyProfile"	: "browse file",
                "aktaPendirian"		: "browse file",
                "SIUP/SuratIzinberusaha": "browse file",
                "NPWPPerusahaan"	: "browse file",
                "NIB/TDP"		: "browse file",
                "IDP/SITU"		: "browse file",
                "aktaPerubahan"		: "browse file",
                "SKPMenteri"		: "browse file",
                "sertAntiPenyuapan"	: "browse file",
                "suratKeteranganNonPKP" : "browse file",
                "suratPengukuhanPKP"	: "browse file"
                #Format berkas pdf, jpg atau png maksimal 2 mb
            }
            """

        And The Vendor wants to upload "Dokumen"
        And The Vendor must click "Select File" button where found on the "Unggah Berkas" column in "Dokumen Legal" grid
        And The Vendor will see "Pilih Dokumen" form
        And The Vendor must click "Select File" button where found on the "Pilih Dokumen" form
        # And The Vendor can see file with pdf, png or jpg format
        # And The Vendor can choose "Dokumen Legal" file

        # When The Vendor click "Open" button on the browse window
        # And The Vendor will see the file on "Pilih Dokumen" form
        And The Vendor can click "Tutup" button to upload the "Dokumen"
        And The Vendor can see the "Dokumen" in "Dokumen Legal" grid