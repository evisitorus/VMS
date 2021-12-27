# language: en
# workflow
Feature: Vendor - Edit vendor information - Company Profile 

 As a Vendor  
 I want to edit company information
 So that I can modify my company information which has been recorded

# @run_after_test
  Scenario: Edit PIC Information 
    Given The Vendor already login into VMS using his or her registered company information
     When The Vendor wants to edit several data from his or her company information 
      And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
      And The Vendor must click "PIC" Tab 
      And The Vendor will see "Akun PIC" form
      And The Vendor must clicks button "Edit" button from selected record on "PIC" form 
      And The Vendor will see information which state for every changes should be re-check by verificator
      """
      {
         "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
      }
      """
      And The Vendor will see information details from recorded data
      """
      {
         "avatar"       : "browse",
                           #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
         "email"        : "be.visible; state : disabled",          
         "noHandphone"  : "be.visible",  
         "password"		: "be.visible"
      }
      """
      And The Vendor wants to change their password 
      And The Vendor must define new password on "PIC" form 
      """
      {
         "avatar"             : "browse",
                                #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
         "email"              : "be.visible; state : disabled",          
         "noHandphone"        : "be.visible",  
         "password"			  : "be.visible",
         "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
                               #if user input more than 15 chars, input type locked
         "repeatNewPassword   : "P0intBreak!23"
      }
      """
      And The Vendor must click "Simpan" button to save information of "PIC" 
      And The Vendor will see confirmation message 
      """
      {
      
          "message" : "Simpan perubahan data PIC Perusahaan?",
          "option"  : "Yes/No"
      }
      """
      And The Vendor select "Yes" option 
    Then The Vendor already modify her or his company information by editing recorded "PIC"

 #edit PIC
#   Scenario: Edit PIC Avatar not in jpg / jpeg / png extension  
#    Given The Vendor already login into VMS using his or her registered company information
#      When The Vendor wants to edit several data from his or her company information 
#       And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
#       And The Vendor must click "PIC" Tab 
#       And The Vendor will see "Akun PIC" form
#       And The Vendor must click button "Edit" button from selected record on "PIC" form 
#       And The Vendor will see information which state for every changes should be re-check by verificator
#       """
#       {
#          "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
#       }
#       """
#       And The Vendor can modify data which displayed on "PIC" form with invalid file extension 
#       """
#       {
#          "avatar"             : "browse",
#                                 #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
#          "email"              : "be.visible; state : disabled",          
#          "noHandphone"        : "be.visible",  
#          "password"			  : "be.visible",
#          "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
#                                #if user input more than 15 chars, input type locked
#          "repeatNewPassword   : "P0intBreak!23"
#       }
#       """
#       And The Vendor must click "Simpan" button to save information of "PIC" 
#     Then The Vendor can not continue to add document information "PIC" 
    
# #  #edit PIC
#  Scenario: Edit PIC Avatar more than 2MB
#   Given The Vendor already login into VMS using his or her registered company information
#      When The Vendor wants to edit several data from his or her company information 
#       And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
#       And The Vendor must click "PIC" Tab 
#       And The Vendor will see "Akun PIC" form
#       And The Vendor must click button "Edit" button from selected record on "PIC" form 
#       And The Vendor will see information which state for every changes should be re-check by verificator
#       """
#       {
#          "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
#       }
#       """
#       And The Vendor can modify data which displayed on "PIC" form with document more than 2 MB 
#       """
#       {
#          "avatar"             : "browse",
#                                 #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
#          "email"              : "be.visible; state : disabled",          
#          "noHandphone"        : "be.visible",  
#          "password"			  : "be.visible",
#          "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
#                                #if user input more than 15 chars, input type locked
#          "repeatNewPassword   : "P0intBreak!23"
#       }
#       """
#       And The Vendor must click "Simpan" button to save information of "PIC" 
#     Then The Vendor can not continue to add document information "PIC" 
    
# #  #edit PIC
#    Scenario: Repeat new password not the same with new confirmation password 
#     Given The Vendor already login into VMS using his or her registered company information
#      When The Vendor wants to edit several data from his or her company information 
#       And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
#       And The Vendor must click "PIC" Tab 
#       And The Vendor will see "Akun PIC" form
#       And The Vendor must click button "Edit" button from selected record on "PIC" form 
#       And The Vendor will see information which state for every changes should be re-check by verificator
#       """
#       {
#          "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
#       }
#       """
#       And The Vendor define new password not the same with new confirmation password
#       """
#       {
#          "avatar"             : "browse",
#                                 #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
#          "email"              : "be.visible; state : disabled",          
#          "noHandphone"        : "be.visible",  
#          "password"			  : "be.visible",
#          "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
#                                  #if user input more than 15 chars, input type locked
#          "repeatNewPassword   : "P0intBreak!2"
#       }
#       """
#       And The Vendor must click "Simpan" button to save information of "PIC" 
#       And The Vendor will see warning message 
#       """
#       {
#          "message" : "Konfirmasi Kata sandi baru yang dimasukkan tidak sesuai", 
#          "option"  : "Yes"
#       }
#       """
#       And The Vendor select "Yes" option 
#     Then The Vendor can not continue to add document information "PIC"

# #  #edit PIC
#    Scenario: Repeat new password is the same with old password 
#     Given The Vendor already login into VMS using his or her registered company information
#      When The Vendor wants to edit several data from his or her company information 
#       And The Vendor must click "Kelola Akun" menu where found on "Side Menu" of "Vendor Portal"
#       And The Vendor must click "PIC" Tab 
#       And The Vendor will see "Akun PIC" form
#       And The Vendor must click button "Edit" button from selected record on "PIC" form 
#       And The Vendor will see information which state for every changes should be re-check by verificator
#       """
#       {
#          "message" : "Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar."
#       }
#       """
#       And The Vendor define new password is the same with old password
#       """
#       {
#          "avatar"             : "browse",
#                                 #image harus berupa jpg, jpeg atau png dengan maksimum file 2 mb                         
#          "email"              : "be.visible; state : disabled",          
#          "noHandphone"        : "be.visible",  
#          "password"			  : "be.visible",
#          "newPassword" 		  : "P0intBreak!23", #password must be combination cointains numeric, alphanumeric and special character with maximum input 15 
#                                  #if user input more than 15 chars, input type locked
#          "repeatNewPassword   : "P0intBreak!23"
#       }
#       """
#       And The Vendor must click "Simpan" button to save information of "PIC" 
#       And The Vendor will see warning message 
#       """
#       {
#          "message" : "Kata sandi baru tidak boleh sama dengan kata sandi lama",
#          "option"  : "Yes"
#       }
#       """
#       And The Vendor select "Yes" option 
#     Then The Vendor can not continue to add document information "PIC"