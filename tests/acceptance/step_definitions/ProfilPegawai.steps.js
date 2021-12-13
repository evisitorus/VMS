const { I } = inject();

Given('The Vendor will get warning message tooltip on form {string}', (form) => {
    switch (form) {
        case "Pegawai":
            I.see('NIK Karyawan harus diisi');
            I.see('Nama Karyawan harus diisi');
            I.see('Mohon pilih salah satu opsi tipe karyawan');
            I.see('Jabatan tidak boleh kosong');
            I.see('Bidang Pekerjaan tidak boleh kosong');
            break;
        default:
            I.waitForElement(form);
            break;
    }
});