const Helper = require('@codeceptjs/helper');

class Alias extends Helper {

  fieldAliases = {
    "Email": "#input-email input[class=k-input]",
    "Password": "#input-password input[class=k-input]",
    "Nomor Dokumen": "#input-nomor-dokumen input[class=k-input]",
    "Nama Dokumen": "#input-nama-dokumen input[class=k-input]",
    "Berlaku Sampai": "#input-berlaku-sampai input[class=k-input]",
    "NIK": "#nikPegawaiInput input[class=k-input]",
    "First Name": "#firstName input[class=k-input]",
    "Last Name": "#lastName input[class=k-input]",
    "Tipe Karyawan": "#tipeKaryawanDropdown.k-dropdown",
    "Jabatan": "#jabatanKaryawanInput input[class=k-input]",
    "Bidang Pekerjaan": "#bidangPekerjaan.k-dropdown",
  }
  fileAliases = {
    "Lampiran": "#input-lampiran-file input[type=file]",
    "Resume": "#resumeKaryawanUpload input[type=file]",
  }

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = Alias;
