#language: en
#workflow
Feature: Vendor - Activation Account  

  As a vendor 
  I want to continue registration process
  So that I can activated my VMS Account 

 #positive scenario for account activation, link activation will be active for 48 hours 
    Scenario: Link Activation 
      Given The Vendor already finished registration process 
    #   # When The Vendor clicks "Daftar" button where found on "Registration" Form 
    #   #   And The Vendor will see success message from the system 
    #   #   """
    #   #   {
    #   #       "message" : "Selamat anda telah terdaftar sebagai Vendor pada VMS, silahkan cek email anda untuk melakukan aktivasi akun",
    #   #       "button"  : "Yes"
    #   #   }
    #   #   """
    #   #   And The Vendor must selects "Yes" button
    #     # And The Vendor must check "Activation Email" on his or her email address 
    #     # And The Vendor already on his or her email 
    #     # And The Vendor must open "Activation Message" from VMS 
    #     # """
    #     # {
        
    #     #   "messageContent" : "Selamat, Anda telah berhasil registrasi. 
    #     #                       Untuk dapat mempergunakan seluruh fitur yang tersedia, Silakan klik link berikut ini untuk mengaktivasi akun Anda: "
    #     #   "linkActivation" : "http://vms.padiumkm.id/activate/uid1"
    #     # }
    #     # """
    #     #untuk template email ada pada gambar terpisah 
        
        And The Vendor clicks link "linkActivation"
        And The Vendor will bring to "Define Password" form 
        And The Vendor should define his or her new password to access VMS 
        """
        {
        
            "password" : "P0intBreak!23", #password must me combination cointains numeric, alphanumeric and special character with maximum input 15 
                                          #if user input more than 15 chars, input type locked
            "repeatPassword : "P0intBreak!23"
        }
        """
        And The Vendor clicks "Save" button from "Define Password" form 
        And The Vendor will see success message from the system 
        """
        {
            "message" : "Selamat anda telah melakukan aktivasi akun, silahkan masuk ke halaman VMS untuk melengkapi profil anda",
            "button"  : "Yes"
        }
        """ 
        And The Vendor must selects "Yes" button
    #     And The Vendor will be flag as "Aktif" also will get "Vendor Basic" badge 
    #   Then The Vendor already activated his or her account for VMS and can continue to test the account by Log-in to the app
    #for login scenario after activation will be describe on next story

 #negative scenario for account activation, if vendor clicks link activation more than 48 hours 
    Scenario: Link Activation Expired
      Given The Vendor already finished registration process 
      # When The Vendor checks "Activation Email" on his or her email address on the next following day 
      #   And The Vendor selects "Activation Message" from VMS 
      #   """
      #   {
        
      #     "messageContent" : "Selamat, Anda telah berhasil registrasi. 
      #                         Untuk dapat mempergunakan seluruh fitur yang tersedia, Silakan klik link berikut ini untuk mengaktivasi akun Anda: "
      #     "linkActivation" : "http://vms.padiumkm.id/activate/uid1"
      #   }
      #   """
        And The Vendor clicks link "linkActivation Expired"
        And The Vendor will bring to "Activation Confirmation" form 
        And The Vendor will see warning message which stated that activation failed
        """
        {        
          "message" : "Aktivasi akun anda gagal dilakukan, karena link hanya berlaku selama 2x24 jam dari sejak anda melakukan registrasi, Silahkan ulangi proses registrasi akun anda untuk mendapatkan link aktivasi terbaru"
        }
        """
      # Then The Vendor cant continue to activate his or her account due activation link was expired