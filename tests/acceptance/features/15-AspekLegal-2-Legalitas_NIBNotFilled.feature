# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to completing my company information
    So that I can upgrade my company level to vendor pro

    #Alternative Scenario - Simpan Legalitas - NIB in Informasi Umum is empty
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to complete his or her company profile
        And The Vendor must click "Aspek Legal" menu which found on "Sidebar Menu"
        And The Vendor will see "Legalitas" form
        And The Vendor must complete following inputs where found on "Legalitas" form without NoNIB
            """
            {
                "noAktaPendirian"	: "free text",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "notaris"		: "free text",
                "notarisPengganti"	: "free text",
                "noAktaPerubahan"	: "free text",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "notaris"	: "free text",
                "notarisPengganti"	: "free text",
                "noSKPengesahan"	: "free text",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "npwp"	: "get data from initial inputted data",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "noSIUP"	: "textfield is active and can be filled"",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "noNIB"	: "textfield is active and can be filled",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "checklistSeumurHidup"	: "checked/unchecked",
                "tanggalKadaluarsa"	: "textfield is active and date format",
                #Format tanggal dd/mm/yyyy
                "noIDP"	: "textfield is active and can be filled",
                "tanggalTerbit"		: "date format",
                #Format tanggal dd/mm/yyyy
                "checklistSeumurHidup"	: "checked/unchecked",
                "tanggalKadaluarsa"	: "textfield is active and date format",
                #Format tanggal dd/mm/yyyy
            }
            """
        When The Vendor has fill all field
        And The Vendor wants to save information of "Legalitas"
        Then The Vendor must click "Simpan" button where found on the "Right-bottom" of "Legalitas" form
        Then The Vendor must select "Ya" option for "Legalitas" form
        And The Vendor will see "Legalitas" data in the form
