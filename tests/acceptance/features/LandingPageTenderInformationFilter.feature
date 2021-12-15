# language: en
# workflow

Feature: User - Tender Information - Filter

  As an User
  I want see Tender Information
  So that I can get more information in regards to Tender that posted on VMS

  Scenario: Tender Information Filter (Default as Card List)
    Given The User is on VMS Landing Page
    When The User accesses Informasi Pengadaan section
    And The User wants to filter information to specific list
    And The User must define parameter on filter section of "Informasi Pengadaan" likes "namaPerusahaan" or "namaTender" or "waktuRegistrasi" or "statusTender" or "nilaiHPS"
    And The User will see list of "Informasi Pengadaan" based on parameters which define on "Pencarian" section
    """
    {
      "logoPerusahaan"        : "be.visible",
      "namaPerusahaan"  	    : "be.visible",
      "namaTender"		  	    : "be.visible",
      "statusTender"	  	    : "be.visible",
      "metodeTender"	  	    : "be.visible",
      "batasAkhirRegistrasi"  : "be.visible",
      "nilaiHPS"		          : "be.visible",
      "lokasi"			          : "be.visible",
      "bidangUsaha"		        : "be.visible",
      "tanggalPosting"	      : "be.visible",
    }
    """
    Then The User can see list of Tender on "Tender Informations Board"

  Scenario: Tender Information Reset Filter
    Given The User is on VMS Landing Page
    When The User accesses Informasi Pengadaan section
    And The User already filter Tender Information
    And The User already see list information of "Tender" on "Tender Information Board"
    And The User wants to clear "Filter" parameter
    And The User must clicks "Reset Filter" button
    And The User will see that filter information back to empty
    Then The User will see that information of "Tender" on "Tender Information Board" will back to default state

