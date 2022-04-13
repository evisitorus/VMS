# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to see my data completion status
    So that I can submit verification request based on my data

    #3 Positive Scenario - Cancel Verification Request
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to see his or her completion status on each aspect
        And The Vendor must click "Pengajuan Verifikasi" menu which found on "Sidebar Menu"
        And The Vendor will see "Pengajuan Verifikasi" page

        When The Vendor has submit verification request
        And The Vendor wants to cancel his or her verification request
        Then the Vendor can click the "Batalkan Pengajuan" button on the right-bottom of the page
        And The Vendor will see confirmation message
            """
            {
                "message": "Anda akan membatalkan Pengajuan Verifikasi?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor select "Ya" option
        And The Vendor will see "Pengajuan Verifikasi" page
        And the Vendor will see the button change into "Ajukan Verifikasi" button on the right-bottom of the page

    #================================================================================================================================================
    #3 Negative Scenario - Cancel Verification Request
    Scenario:
    	Given The Vendor logged into VMS using his or her registered company information
    	When The Vendor see dashboard page
      	And The Vendor wants to see his or her completion status on each aspect
      	And The Vendor must click "Pengajuan Verifikasi" menu which found on "Sidebar Menu"
      	And The Vendor will see "Pengajuan Verifikasi" page
          
        When The Vendor has submit verification request
        And The Vendor wants to cancel his or her verification request
        Then the Vendor can click the "Batalkan Pengajuan" button on the right-bottom of the page
        And The Vendor will see confirmation message
            """
            {
                "message": "Anda akan membatalkan Pengajuan Verifikasi?",
                "option": "Ya/Tidak"
            }
            """
        And The Vendor select "Tidak" option
        And The Vendor will see "Pengajuan Verifikasi" page
        And The Vendor will see "Batalkan Pengajuan" button on the right-bottom of the page
