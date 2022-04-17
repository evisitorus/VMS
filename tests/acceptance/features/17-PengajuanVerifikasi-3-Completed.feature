# language: en
# workflow
Feature: Vendor Basic - Completing vendor information

    As a vendor basic
    I want to see my data completion status
    So that I can submit verification request based on my data

    #2 - Positive Scenario - Submit Verification Request
    Scenario:
        Given The Vendor logged into VMS using his or her registered company information
        When The Vendor see dashboard page
        And The Vendor wants to see his or her completion status on each aspect
        And The Vendor must click "Pengajuan Verifikasi" menu which found on "Sidebar Menu"
        And The Vendor will see "Pengajuan Verifikasi" page

        When The Vendor has completed all aspect
        Then The Vendor will see completed aspect status has changed into "Completed on date"
        And The Vendor will see checked checkbox on completed aspect
        And The Vendor wants to submit his or her verification request
        Then The Vendor can click the "Ajukan Verifikasi" button on the right-bottom of the page
        And The Vendor will see the button change into "Batalkan Pengajuan" button on the right-bottom of the page