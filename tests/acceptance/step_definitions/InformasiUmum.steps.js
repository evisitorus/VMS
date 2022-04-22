const { I } = inject();

Given('The Vendor logged into VMS using his or her registered company information', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'evitest@yopmail.com');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '12345678');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor see dashboard page', () => {
    I.amOnPage('/dashboard');
});

Given('The Vendor wants to complete his or her company profile', () => {

});

Given('The Vendor must click {string} menu which found on "Sidebar Menu"', (sidebar) => {
    switch (sidebar) {
        case "Informasi Umum":
            I.click('#k-panelbar-0-item-sidebar-profile-information');
            break;
        case "Tata Kelola Perusahaan":
            I.click('#k-panelbar-0-item-sidebar-tata-kelola');
            break;
        case "Aspek Finansial":
            I.click('#k-panelbar-0-item-sidebar-laporan-keuangan');
            break;
        case "Aspek Legal":
            I.click('#k-panelbar-0-item-sidebar-aspek-legal');
            break;
        case "Riwayat Pekerjaan":
            I.click('#k-panelbar-0-item-sidebar-riwayat-pekerjaan');
            break;
        case "Pengajuan Verifikasi":
            I.click('#k-panelbar-0-item-sidebar-verification');
            break;
        default:
            I.click(sidebar);
            break;
    }
});

Given('The Vendor will see {string} form', (form) => {
    switch (form) {
        case "Data Perusahaan":
            I.see('Informasi Umum');
            I.see('Data Perusahaan');
            break;
        case "Pemegang Saham":
            I.see('Tata Kelola Perusahaan');
            I.see('Pemegang Saham');
            break;
        case "Pengurus Perusahaan":
            I.see('Tata Kelola Perusahaan');
            I.see('Pimpinan dan Pengurus Perusahaan');
            break;
        case "Jumlah Pegawai":
            I.see('Tata Kelola Perusahaan');
            I.see('Pegawai');
            break;
        case "Pegawai":
            I.see('Tata Kelola Perusahaan');
            I.see('Pegawai');
            break;
        case "Bank":
            I.see('Aspek Finansial');
            I.see('Bank');
            break;
        case "Modal Dasar":
            I.see('Aspek Finansial');
            I.see('Modal Dasar');
            break;
        case "Neraca Keuangan":
            I.see('Aspek Finansial');
            I.see('Neraca Keuangan');
            break;
        case "SPT":
            I.see('Aspek Finansial');
            I.see('SPT');
            break;
        case "Asset":
            I.see('Aspek Finansial');
            I.see('Asset');
            break;
        case "Legalitas":
            I.see('Aspek Legal');
            I.see('Legalitas');
            break;
        case "Dokumen Legal":
            I.see('Aspek Legal');
            I.see('Dokumen Legal');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.see('Aspek Legal');
            I.see('Sertifikasi dan Dokumen Khusus');
            break;
        case "Riwayat Pekerjaan":
            I.see('Riwayat Pekerjaan');
            break;
        case "Pilih Dokumen":
            I.see('Pilih File');
            break;
        default:
            break;
    }
});

Given('The Vendor must complete following inputs where found on {string} form', (form) => {
    switch (form) {
        case "Data Perusahaan":
            I.attachFile('#imgPerusahaanUpload input[type=file]', './tests/acceptance/_fixture/logo_justin.jpg');
            I.checkOption('#NIBbtnTrue');
            I.click('#nomorIndukBerusaha');
            I.fillField('#nomorIndukBerusaha', '12345678');
            I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Megah VMS');
            I.fillField('#inisialPerusahaanInput input[class=k-input]', 'VMS');
            I.checkOption('#ptRbtn');
            I.checkOption('#pkp');
            I.click('#tipeBadanUsaha');
            I.fillField('#tipeBadanUsaha', 'BUMN (Group)');
            I.pressKey('Enter');
            I.click('#jenisKegiatanUsahaUtama');
            I.fillField('#jenisKegiatanUsahaUtama', 'Pengadaan Material Konstruksi');
            I.pressKey('Enter');
            I.click('#jenisPenyediaUsaha');
            I.fillField('#jenisPenyediaUsaha', 'Principal');
            I.pressKey('Enter');
            I.fillField('#npwpPerusahaan input[class=k-input]', '99.999.999.9-999.911');
            I.click('#bidangUsaha');
            I.fillField('#bidangUsaha input[class=k-input]', 'Lainnya');
            I.pressKey('Enter');
            I.click('#bumnPengampu');
            I.fillField('#bumnPengampu input[class=k-input]', 'PT Pertamina (Persero)');
            I.pressKey('Enter');
            I.click('#organisasiHimpunan');
            I.fillField('#organisasiHimpunan input[class=k-input]', 'HIPMI');
            I.pressKey('Enter');
            I.fillField('#websitePerusahaan input[class=k-input]', 'www.vms.com');
            I.fillField('#emailPerusahaan input[class=k-input]', 'vms@telkom.co.id');
            break;
        case "Bank":
            I.click('#input-keuangan-nama-bank');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-keuangan-nama-bank', 'Bank Mandiri');
            I.click('#input-keuangan-cabang');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-keuangan-cabang', 'Jakarta Selatan');
            I.click('#input-keuangan-nomor-rekening');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-keuangan-nomor-rekening', '12345678');
            I.click('#input-keuangan-nama-pemilik-rekening');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-keuangan-nama-pemilik-rekening', 'evi sitorus');
            break;
        case "Modal Dasar":
            I.click('#input-keuangan-modal-dasar');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-keuangan-modal-dasar', '12345678');
            I.click('#input-keuangan-modal-ditempatkan');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-keuangan-modal-ditempatkan', '12345678');
            break;
        case "Legalitas":
            I.fillField('#noAktaPendirian input[class=k-input]', '66666');
            I.click('#tanggalTerbitAktaPendirian');
            I.fillField('#tanggalTerbitAktaPendirian input[class=k-input]', '04112022');
            I.fillField('#notarisAktaPendirian input[class=k-input]', 'evi');
            I.fillField('#notarisPenggantiAktaPendirian input[class=k-input]', 'sitorus');
            I.fillField('#noAktaPerubahan input[class=k-input]', '5555');
            I.click('#tanggalTerbitAktaPerubahan');
            I.fillField('#tanggalTerbitAktaPerubahan input[class=k-input]', '04112022');
            I.fillField('#notarisAktaPerubahan input[class=k-input]', 'evi');
            I.fillField('#notarisPenggantiAktaPerubahan input[class=k-input]', 'sitorus');
            I.fillField('#noSkPengesahanMenteri input[class=k-input]', '4444');
            I.click('#tanggalTerbitNoSkPengesahanMenteri');
            I.fillField('#tanggalTerbitNoSkPengesahanMenteri input[class=k-input]', '04112022');
            I.fillField('#npwp input[class=k-input]', '111100002222');
            I.click('#tanggalTerbitNpwp input[class=k-input]');
            I.fillField('#tanggalTerbitNpwp input[class=k-input]', '04112022');
            I.fillField('#noSiup input[class=k-input]', '33333');
            I.click('#tanggalTerbitSiup input[class=k-input]');
            I.fillField('#tanggalTerbitSiup input[class=k-input]', '04112022');
            I.fillField('#noNibTdp input[class=k-input]', '222222');
            I.click('#tanggalTerbitNibTdp input[class=k-input]');
            I.fillField('#tanggalTerbitNibTdp input[class=k-input]', '04112022');
            I.click('#tanggalExpireNibTdp input[class=k-input]');
            I.fillField('#tanggalExpireNibTdp input[class=k-input]', '04112022');
            I.fillField('#noIdpSitu input[class=k-input]', '11111');
            I.click('#tanggalTerbitIdpSitu input[class=k-input]');
            I.fillField('#tanggalTerbitIdpSitu input[class=k-input]', '04112022');
            I.click('#tanggalExpireIdpSitu input[class=k-input]');
            I.fillField('#tanggalExpireIdpSitu input[class=k-input]', '04112022');
            break;
        case "":
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            break;
        case "":
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            break;
        case "":
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            break;
        case "":
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            break;
        case "":
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            I.fillField('#', '');
            break;
        default:
            break;
    }
});

Given('The Vendor has fill all field', () => {

});

Given('The Vendor wants to save information of {string}', () => {

});

Given('The Vendor wants to Cancel information of {string}', () => {

});

Given('The Vendor must click "Simpan" button where found on the {string} of {string} form', (form,button) => {
    switch (button) {
        case "Data Perusahaan":
            I.click('#saveInformasiPerusahaanBtn');
            break;
        case "PIC":
            I.click('#btn-simpan');
            break;
        case "Korespondensi":
            I.click('#btn-submit-alamat');
            break;
        case "Pemegang Saham":
            I.click('#submitPemegangSaham');
            break;
        case "Pengurus Perusahaan":
            I.click('#savePimpinanDanPengurusFormBtn');
            break;
        case "Pegawai":
            I.click('#saveKaryawanFormBtn');
            break;
        case "Bank":
            I.click('#btn-simpan-data-bank');
            break;
        case "Modal Dasar":
            I.click('#btn-simpan-modal-dasar');
            break;
        case "Neraca Keuangan":
            I.click('#btn-simpan-neraca');
            break;
        case "SPT":
            I.click('#btn-simpan-spt');
            break;
        case "Asset":
            I.click('#btn-simpan');
            break;
        case "Legalitas":
            I.click('#simpanLegalitas');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.click('#btn-simpan');
            break;
        default:
            I.click(button);
            break;
    }
});

Given('The Vendor will see confirmation message', () => {
    I.see('Konfirmasi');
});

Given('The Vendor must select "Ya" option for {string} form', (button) => {
    switch (button) {
        case "Data Perusahaan":
            I.click('#btn-popup-yes');
            I.click('#btn-popup-yes');
            break;
        case "PIC":
            I.click('#btn-popup-yes');
            I.click('#btn-popup-yes');
            break;
        case "Korespondensi":
            I.click('#btn-popup-yes');
            break;
        case "Pemegang Saham":
            I.click('#btn-popup-yes');
            break;
        case "Pengurus Perusahaan":
            I.click('#btn-popup-yes');
            break;
        case "Jumlah Pegawai":
            I.click('#btn-popup-yes');
            break;
        case "Pegawai":
            I.click('#btn-popup-yes');
            break;
        case "Bank":
            I.click('#btn-popup-yes');
            break;
        case "Modal Dasar":
            I.click('#btn-popup-yes');
            break;
        case "Neraca Keuangan":
            I.click('#btn-popup-yes');
            break;
        case "SPT":
            I.click('#btn-popup-yes');
            break;
        case "Asset":
            I.click('#btn-popup-yes');
            break;
        case "Legalitas":
            I.click('#btn-popup-yes');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.click('#btn-popup-yes');
            break;
        default:
            I.click('Ya');
            break;
    }
});

Given('The Vendor must select "Ya" option for delete {string} form', (button) => {
    switch (button) {
        case "Korespondensi":
            I.click('#btn-popup-yes');
            break;
        case "Pemegang Saham":
            I.click('#btn-popup-yes');
            break;
        default:
            I.click('Ya');
            break;
    }
});

Given('The Vendor will see {string} data in the form', () => {

});

Given('The Vendor must complete following inputs where found on {string} form without NIB', () => {
    I.attachFile('#imgPerusahaanUpload input[type=file]', './tests/acceptance/_fixture/logo_justin.jpg');
    I.checkOption('#NIBbtnFalse');
    I.fillField('#namaPerusahaan input[class=k-input]', 'PT. Megah VMS');
    I.fillField('#inisialPerusahaanInput input[class=k-input]', 'VMS');
    I.checkOption('#ptRbtn');
    I.checkOption('#pkp');
    I.click('#tipeBadanUsaha');
    I.fillField('#tipeBadanUsaha', 'BUMN (Group)');
    I.pressKey('Enter');
    I.click('#jenisKegiatanUsahaUtama');
    I.fillField('#jenisKegiatanUsahaUtama', 'Pengadaan Material Konstruksi');
    I.pressKey('Enter');
    I.click('#jenisPenyediaUsaha');
    I.fillField('#jenisPenyediaUsaha', 'Principal');
    I.pressKey('Enter');
    I.fillField('#npwpPerusahaan input[class=k-input]', '99.999.999.9-999.911');
    I.click('#bidangUsaha');
    I.fillField('#bidangUsaha input[class=k-input]', 'Lainnya');
    I.pressKey('Enter');
    I.click('#bumnPengampu');
    I.fillField('#bumnPengampu input[class=k-input]', 'PT Pertamina (Persero)');
    I.pressKey('Enter');
    I.click('#organisasiHimpunan');
    I.fillField('#organisasiHimpunan input[class=k-input]', 'HIPMI');
    I.pressKey('Enter');
    I.fillField('#websitePerusahaan input[class=k-input]', 'www.vms.com');
    I.fillField('#emailPerusahaan input[class=k-input]', 'vms@telkom.co.id');
});

Given('The Vendor must click {string} to expand {string} form', () => {

});

Given('The Vendor wants to add information in regards to {string} on {string} which part of {string} page', (form1,form2,form3) => {
    switch (form1) {
        case "PIC":
            I.click('#btn-perbarui');
            I.click('#btn-popup-yes');
            break;
        case "":
            I.see('');
            break;
        default:
            break;
    }
});

Given('the Vendor must fill', () => {
    I.click('#input-name');
    I.pressKey(['Control','A']);
    I.pressKey('Backspace');
    I.fillField('#input-name', 'Steven Rogers');
    I.click('#input-phone-number');
    I.pressKey(['Control','A']);
    I.pressKey('Backspace');
    I.fillField('#input-phone-number', '0813202381209');
});

Given('The Vendor accessing {string} in {string} page', () => {

});

Given('The Vendor can see the first five list of vendors in {string} at {string} page', (form,page) => {
    switch (form) {
        case "Korespondensi":
            I.see('No.');
            I.see('Nama Alamat');
            I.see('Alamat');
            I.see('Kota');
            I.see('No. Telepon');
            I.see('Action');
            break;
        case "Pemegang Saham Grid":
            I.see('No.');
            I.see('Nama Pemegang Saham');
            I.see('Jenis Pemegang Saham');
            I.see('Pemegang Saham Lokal/Asing');
            I.see('% Kepemilikan');
            I.see('Action');
            break;
        case "Pengurus Perusahaan Grid":
            I.see('No.');
            I.see('Nama Pengurus');
            I.see('Jabatan');
            I.see('No. Identitas');
            I.see('Kartu Identitas');
            I.see('NPWP');
            I.see('Kartu NPWP');
            I.see('Action');
            break;
        case "Jumlah Pegawai Grid":
            I.see('Jumlah Pegawai Domestik');
            I.see('Jumlah Pegawai Asing');
            break;
        case "Pegawai Grid":
            I.see('No.');
            I.see('NIK');
            I.see('Nama Pegawai');
            I.see('Tipe Karyawan');
            I.see('Jabatan');
            I.see('Bidang Pekerjaan');
            I.see('Resume');
            I.see('Action');
            break;
        case "Neraca Keuangan Grid":
            I.see('Tahun');
            I.see('Aktiva (Asset)');
            I.see('Passiva (Liability)');
            I.see('Ekuitas (Equity)');
            I.see('Omzet Bersih');
            I.see('Action');
            break;
        case "SPT Grid":
            I.see('Tahun');
            I.see('Nomor');
            I.see('Lampiran');
            I.see('Waktu Upload');
            I.see('Action');
            break;
        case "Asset Grid":
            I.see('No.');
            I.see('Nama Asset');
            I.see('Jumlah (Unit)');
            I.see('Estimasi Nilai Aset');
            I.see('Tahun Perolehan');
            I.see('Action');
            break;
        case "":
            I.see('');
            I.see('');
            I.see('');
            I.see('');
            I.see('');
            break;
        default:
            break;
    }    
});

Given('The Vendor can click "next" to see another five record after record of 5 from {string} on {string}', () => {

});

Given('The Vendor see list of {string} from {string}', () => {

});

Given('The Vendor must clicks button "Tambah" where found on the {string} of {string}', (form1,form2) => {
    switch (form2) {
        case "Korespondensi Grid":
            I.click('#btn-tambah-alamat');
            break;
        case "Pemegang Saham Grid":
            I.click('#btn-addPemegangSaham');
            break;
        case "Pengurus Perusahaan Grid":
            I.click('#addPengurusBtn');
            break;
        case "Pegawai Grid":
            I.click('#addPegawaiBtn');
            break;
        case "Neraca Keuangan Grid":
            I.click('#btn-tambah-neraca');
            break;
        case "SPT Grid":
            I.click('#btn-tambah-spt');
            break;
        case "Asset Grid":
            I.click('#btn-tambah-asset');
            break;
        case "Sertifikasi dan Dokumen Khusus Grid":
            I.click('#btn-tambah-dokumen');
            break;
        case "":
            I.click('#');
            break;
        case "":
            I.click('#');
            break;
        default:
            break;
    }
});

Given('The Vendor will see {string} form to add records regarding to {string}', (form1,form2) => {
    switch (form1) {
        case "Korespondensi":
            I.fillField('#namaAlamat input[class=k-input]', 'Kantor BDV');
            I.fillField('#alamat input[class=k-input]', 'Jl. Jenderal Ahmad Yani no. 19-65 A');
            I.click('#provinsi.k-dropdown');
            I.fillField('#provinsi.k-dropdown', 'Jawa Barat');
            I.pressKey('Enter');
            I.click('#kota.k-dropdown');
            I.fillField('#kota.k-dropdown', 'Kota Bandung');
            I.pressKey('Enter');
            I.click('#kecamatan.k-dropdown');
            I.fillField('#kecamatan.k-dropdown', 'Kiara Condong');
            I.pressKey('Enter');
            I.click('#kelurahan.k-dropdown');
            I.fillField('#kelurahan.k-dropdown', 'Cicaheum');
            I.pressKey('Enter');
            I.click('#kodepos.k-dropdown');
            I.fillField('#kodepos.k-dropdown', '00000');
            I.pressKey('Enter');
            I.click('#noTeleponKodeArea');
            I.fillField('#noTeleponKodeArea', '021');
            I.pressKey('Enter');
            I.click('#noTelepon');
            I.fillField('#noTelepon', '12345678');
            I.pressKey('Enter');
            break;
        case "Pemegang Saham":
            I.fillField('#namaPemegangSaham input[class=k-input]', 'Randi');
            I.click('#Perseorangan');
            I.click('#Lokal');
            I.click('#kepemilikanSaham input[role=spinbutton]');
            I.fillField('#kepemilikanSaham input[role=spinbutton]', '50');
            break;
        case "Pengurus Perusahaan":
            I.fillField('#firstName input[class=k-input]', 'evi');
            I.fillField('#lastName input[class=k-input]', 'sitorus');
            I.fillField('#jabatanPimpinanDanPengurusInput input[class=k-input]', 'CEO');
            I.click('#noIdentitasPengurusInput input[role=spinbutton]');
            I.fillField('#noIdentitasPengurusInput input[role=spinbutton]', '12345');
            I.attachFile('#resumePimpinanDanPengurusUpload input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            I.click('#npwpPengurusInput input[role=spinbutton]');
            I.fillField('#npwpPengurusInput input[role=spinbutton]', '54321');
            I.attachFile('#npwpPimpinanDanPengurusUpload input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            break;
        case "Pegawai":
            I.click('#nikPegawaiInput input[role=spinbutton]');
            I.fillField('#nikPegawaiInput input[role=spinbutton]', '1234567');
            I.fillField('#firstName input[class=k-input]', 'Justin');
            I.fillField('#lastName input[class=k-input]', 'Bieber');
            I.click('#tipeKaryawanDropdown.k-dropdown');
            I.fillField('#tipeKaryawanDropdown.k-dropdown', 'Tenaga Ahli');
            I.pressKey('Enter');
            I.fillField('#jabatanKaryawanInput input[class=k-input]', 'CTO');
            I.click('#bidangPekerjaan.k-dropdown');
            I.fillField('#bidangPekerjaan.k-dropdown', 'IT');
            I.pressKey('Enter');
            I.attachFile('#resumeKaryawanUpload input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        case "Neraca Keuangan":
            I.click('#input-neraca-tahun input[role=spinbutton]')
            I.fillField('#input-neraca-tahun input[role=spinbutton]', '2020');
            I.click('#input-neraca-aktiva input[role=spinbutton]')
            I.fillField('#input-neraca-aktiva input[role=spinbutton]', '2500000');
            I.click('#input-neraca-pasiva input[role=spinbutton]')
            I.fillField('#input-neraca-pasiva input[role=spinbutton]', '2500000');
            I.click('#input-neraca-ekuitas input[role=spinbutton]')
            I.fillField('#input-neraca-ekuitas input[role=spinbutton]', '2500000');
            I.click('#input-neraca-omzet input[role=spinbutton]')
            I.fillField('#input-neraca-omzet input[role=spinbutton]', '2500000');
            break;
        case "SPT":
            I.click('#input-spt-tahun input[role=spinbutton]');
            I.fillField('#input-spt-tahun input[role=spinbutton]', 2020);
            I.fillField('#input-spt-nomor-dokumen input[class=k-input]', '12340');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        case "Asset":
            I.fillField('#input-nama-asset input[class=k-input]', 'Crane');
            I.click('#input-jumlah-asset input[role=spinbutton]');
            I.fillField('#input-jumlah-asset input[role=spinbutton]', 100);
            I.click('#input-estimasiNilaiAsset-asset input[role=spinbutton]');
            I.fillField('#input-estimasiNilaiAsset-asset input[role=spinbutton]', 1500000);
            I.click('#input-tahun-asset input[role=spinbutton]');
            I.fillField('#input-tahun-asset input[role=spinbutton]', '2020');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.fillField('#input-nama-dokumen input[class=k-input]', 'Dokumen 1');
            I.click('#input-tanggal-terbit input[class=k-input]');
            I.pressKey(['Control','A']);
            I.fillField('#input-tanggal-terbit input[class=k-input]', '04112022');
            I.click('#input-tanggal-expired input[class=k-input]');
            I.pressKey(['Control','A']);
            I.fillField('#input-tanggal-expired input[class=k-input]', '04112022');
            I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        case "Dokumen Legal Grid":
            I.see('No.');
            I.see('Nama Dokumen');
            I.see('File');
            I.see('Unggah Berkas');
            break;
        default:
            break;
    }  
});

Given('The Vendor must uploading document based on "Nama Dokumen"', () => {
    I.see('Company Profile');
    I.see('Akta Pendirian');
    I.see('SIUP / Surat Izin Berusaha');
    I.see('NPWP Perusahaan');
    I.see('NIB / TDP');
    I.see('IDP / SITU');
    I.see('Akta Perubahan');
    I.see('SKP Menteri');
    I.see('Sert. Anti Penyuapan');
    I.see('Surat Keterangan Non PKP');
    I.see('Surat Pengukuhan PKP');
});

Given('The Vendor must click "Batal" button where found on the Right-bottom of {string} form', (form) => {
    switch (form) {
        case "Korespondensi":
            I.click('#btn-batal-alamat');
            break;
        case "Pemegang Saham":
            I.click('#closePemegangSaham');
            break;
        case "Pengurus Perusahaan":
            I.click('#closePimpinanDanPengurusFormBtn');
            break;
        case "Pegawai":
            I.click('#closeKaryawanFormBtn');
            break;
        case "Neraca Keuangan":
            I.click('#btn-batal-neraca');
            break;
        case "SPT":
            I.click('#btn-batal-spt');
            break;
        case "Asset":
            I.click('#btn-batal');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.click('#btn-batal');
            break;
        case "":
            I.click('#');
            break;
        default:
            break;
    }
});

Given('The Vendor will be back to {string}', (page) => {
    switch (page) {
        case "Korespondensi Grid":
            I.seeInCurrentUrl('/profile-information');
            break;
        case "Pemegang Saham grid":
            I.seeInCurrentUrl('/profile-tata-kelola-perusahaan');
            break;    
        default:
            break;
    }
});

Given('The Vendor will not see the {string} data in {string}', () => {

});

Given('The Vendor wants to edit information regarding to {string} on {string} which part of {string} page', () => {

});

Given('The Vendor must clicks button "Edit" where found on each row of records symbolize by {string} for {string}', (icon, form) => {
    switch (form) {
        case "Korespondensi":
            I.click('#btn-update');
            break;
        case "Pemegang Saham":
            I.click('#btnUpdatePemegangSaham');
            break;
        case "Pengurus Perusahaan":
            I.click('#btnUpdatePimpinan');
            break;
        case "Jumlah Pegawai":
            I.click('#editJumlahPegawaiBtn');
            break;
        case "Pegawai":
            I.click('#btnUpdateKaryawan');
            break;
        case "Neraca Keuangan":
            I.click('#btn-update-neraca');
            break;
        case "SPT":
            I.click('#btn-update-spt');
            break;
        case "Asset":
            I.click('#btn-update-asset');
            break;
        case "Dokumen":
            I.click('#btn-update');
            break;
        case "Riwayat Pekerjaan":
            I.click('#btn-update');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.click('#btn-update');
            break;    
        default:
            break;
    }
});

Given('The Vendor must clicks button "Delete" where found on each row of records symbolize by {string} for {string}', (icon, form) => {
    switch (form) {
        case "Korespondensi":
            I.click('#btn-delete');
            break;
        case "Pemegang Saham":
            I.click('#btnDeletePemegangSaham');
            break;
        case "Pengurus Perusahaan":
            I.click('#btnDeletePimpinan');
            break;
        case "Pegawai":
            I.click('#btnDeleteKaryawan');
            break;
        case "Neraca Keuangan":
            I.click('#btn-delete-neraca');
            break;
        case "SPT":
            I.click('#btn-delete-spt');
            break;
        case "Asset":
            I.click('#btn-delete-asset');
            break;
        case "Dokumen":
            I.click('#btn-delete');
            break;
        case "Riwayat Pekerjaan":
            I.click('#btn-delete');
            break; 
            case "Sertifikasi dan Dokumen Khusus":
            I.click('#btn-delete');
            break;    
        default:
            break;
    }
});

Given('The Vendor see pop-up notification in front of {string} form', () => {
    I.see('Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar.');
});

Given('The Vendor must click button "Ya" to close the pop-up notification', () => {
    I.click('#btn-popup-yes');
});

Given('The Vendor see {string} form fill with data from chosen row', (form) => {
    switch (form) {
        case "Korespondensi":
            I.fillField('#namaAlamat input[class=k-input]', 'Kantor Bandung');
            I.fillField('#alamat input[class=k-input]', 'Jl. Jenderal Ahmad Yani no. 19-65 A');
            I.click('#provinsi.k-dropdown');
            I.fillField('#provinsi.k-dropdown', 'Jawa Barat');
            I.pressKey('Enter');
            I.click('#kota.k-dropdown');
            I.fillField('#kota.k-dropdown', 'Kota Bandung');
            I.pressKey('Enter');
            I.click('#kecamatan.k-dropdown');
            I.fillField('#kecamatan.k-dropdown', 'Kiara Condong');
            I.pressKey('Enter');
            I.click('#kelurahan.k-dropdown');
            I.fillField('#kelurahan.k-dropdown', 'Cicaheum');
            I.pressKey('Enter');
            I.click('#kodepos.k-dropdown');
            I.fillField('#kodepos.k-dropdown', '00000');
            I.pressKey('Enter');
            I.click('#noTeleponKodeArea');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#noTeleponKodeArea', '001');
            I.pressKey('Enter');
            I.click('#noTelepon');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#noTelepon', '87654321');
            I.pressKey('Enter');   
            break;
        case "Pemegang Saham":
            I.fillField('#namaPemegangSaham input[class=k-input]', 'John');
            I.click('#BadanUsaha');
            I.click('#Asing');
            I.click('#kepemilikanSaham input[role=spinbutton]');
            I.fillField('#kepemilikanSaham input[role=spinbutton]', '25');
            break;   
        case "Pengurus Perusahaan":
            I.fillField('#firstName input[class=k-input]', 'febiana');
            I.fillField('#lastName input[class=k-input]', 'str');
            I.fillField('#jabatanPimpinanDanPengurusInput input[class=k-input]', 'CMO');
            I.click('#noIdentitasPengurusInput input[role=spinbutton]');
            I.fillField('#noIdentitasPengurusInput input[role=spinbutton]', '111111');
            I.attachFile('#resumePimpinanDanPengurusUpload input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            I.click('#npwpPengurusInput input[role=spinbutton]');
            I.fillField('#npwpPengurusInput input[role=spinbutton]', '222222');
            I.attachFile('#npwpPimpinanDanPengurusUpload input[type=file]', './tests/acceptance/_fixture/image_1mb.png'); 
            break;
        case "Pegawai":
            I.click('#nikPegawaiInput input[role=spinbutton]');
            I.fillField('#nikPegawaiInput input[role=spinbutton]', '7777777');
            I.fillField('#firstName input[class=k-input]', 'Justin');
            I.fillField('#lastName input[class=k-input]', 'Timberlake');
            I.click('#tipeKaryawanDropdown.k-dropdown');
            I.fillField('#tipeKaryawanDropdown.k-dropdown', 'Tenaga Ahli');
            I.pressKey('Enter');
            I.fillField('#jabatanKaryawanInput input[class=k-input]', 'CTO');
            I.click('#bidangPekerjaan.k-dropdown');
            I.fillField('#bidangPekerjaan.k-dropdown', 'IT');
            I.pressKey('Enter');
            I.attachFile('#resumeKaryawanUpload input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        case "Neraca Keuangan":
            I.click('#input-neraca-tahun input[role=spinbutton]')
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-neraca-tahun input[role=spinbutton]', '2021');
            I.click('#input-neraca-aktiva input[role=spinbutton]')
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-neraca-aktiva input[role=spinbutton]', '1500000');
            I.click('#input-neraca-pasiva input[role=spinbutton]')
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-neraca-pasiva input[role=spinbutton]', '1500000');
            I.click('#input-neraca-ekuitas input[role=spinbutton]')
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-neraca-ekuitas input[role=spinbutton]', '1500000');
            I.click('#input-neraca-omzet input[role=spinbutton]')
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-neraca-omzet input[role=spinbutton]', '1500000');
            break;
        case "SPT":
            I.click('#input-spt-tahun input[role=spinbutton]');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-spt-tahun input[role=spinbutton]', 2020);
            I.fillField('#input-spt-nomor-dokumen input[class=k-input]', '12340');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        case "Asset":
            I.fillField('#input-nama-asset input[class=k-input]', 'Komputer');
            I.click('#input-jumlah-asset input[role=spinbutton]');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-jumlah-asset input[role=spinbutton]', 55);
            I.click('#input-estimasiNilaiAsset-asset input[role=spinbutton]');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-estimasiNilaiAsset-asset input[role=spinbutton]', 752000);
            I.click('#input-tahun-asset input[role=spinbutton]');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');
            I.fillField('#input-tahun-asset input[role=spinbutton]', '2015');
            break;
        case "Sertifikasi dan Dokumen Khusus":
            I.click('#input-nama-dokumen input[class=k-input]');
            I.pressKey(['Control','A']);
            I.pressKey('Backspace');    
            I.fillField('#input-nama-dokumen input[class=k-input]', 'Dokumen 1');
            I.click('#input-tanggal-terbit input[class=k-input]');
            I.pressKey(['Control','A']);
            I.fillField('#input-tanggal-terbit input[class=k-input]', '04112022');
            I.click('#input-tanggal-expired input[class=k-input]');
            I.pressKey(['Control','A']);
            I.fillField('#input-tanggal-expired input[class=k-input]', '04112022');
            I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            break;
        default:
            break;
    }
});

Given('The Vendor see updated {string} data in the form', () => {

});

Given('The Vendor wants to delete information regarding to {string} on {string} which part of {string} page', () => {

});

Given('The Vendor will see delete confirmation message', () => {
    I.see('Konfirmasi');
});

Given('The Vendor will see {string} data status is "Terhapus" in the {string} on column "action"', () => {
    I.see('Terhapus');
});

Given('The Vendor must complete following inputs where found on {string} form without NoNIB', () => {
    I.fillField('#noAktaPendirian input[class=k-input]', '66666');
    I.click('#tanggalTerbitAktaPendirian');
    I.fillField('#tanggalTerbitAktaPendirian input[class=k-input]', '04112022');
    I.fillField('#notarisAktaPendirian input[class=k-input]', 'evi');
    I.fillField('#notarisPenggantiAktaPendirian input[class=k-input]', 'sitorus');
    I.fillField('#noAktaPerubahan input[class=k-input]', '5555');
    I.click('#tanggalTerbitAktaPerubahan');
    I.fillField('#tanggalTerbitAktaPerubahan input[class=k-input]', '04112022');
    I.fillField('#notarisAktaPerubahan input[class=k-input]', 'evi');
    I.fillField('#notarisPenggantiAktaPerubahan input[class=k-input]', 'sitorus');
    I.fillField('#noSkPengesahanMenteri input[class=k-input]', '4444');
    I.click('#tanggalTerbitNoSkPengesahanMenteri');
    I.fillField('#tanggalTerbitNoSkPengesahanMenteri input[class=k-input]', '04112022');
    I.fillField('#npwp input[class=k-input]', '111100002222');
    I.click('#tanggalTerbitNpwp input[class=k-input]');
    I.fillField('#tanggalTerbitNpwp input[class=k-input]', '04112022');
    I.fillField('#noSiup input[class=k-input]', '33333');
    I.click('#tanggalTerbitSiup input[class=k-input]');
    I.fillField('#tanggalTerbitSiup input[class=k-input]', '04112022');
    I.fillField('#noNibTdp input[class=k-input]', '222222');
    I.click('#tanggalTerbitNibTdp input[class=k-input]');
    I.fillField('#tanggalTerbitNibTdp input[class=k-input]', '04112022');
    I.click('#tanggalExpireNibTdp input[class=k-input]');
    I.fillField('#tanggalExpireNibTdp input[class=k-input]', '04112022');
    I.fillField('#noIdpSitu input[class=k-input]', '11111');
    I.click('#tanggalTerbitIdpSitu input[class=k-input]');
    I.fillField('#tanggalTerbitIdpSitu input[class=k-input]', '04112022');
    I.click('#tanggalExpireIdpSitu input[class=k-input]');
    I.fillField('#tanggalExpireIdpSitu input[class=k-input]', '04112022');
});

Given('The Vendor wants to upload "Dokumen"', () => {

});

Given('The Vendor must click "Select File" button where found on the "Unggah Berkas" column in "Dokumen Legal" grid', () => {

});

Given('The Vendor must click "Select File" button where found on the "Pilih Dokumen" form', () => {
    I.waitForElement('#uploadBerkasBtn1');
    I.click('#uploadBerkasBtn1');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn2');
    I.click('#uploadBerkasBtn2');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn3');
    I.click('#uploadBerkasBtn3');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn4');
    I.click('#uploadBerkasBtn4');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn5');
    I.click('#uploadBerkasBtn5');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn6');
    I.click('#uploadBerkasBtn6');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn7');
    I.click('#uploadBerkasBtn7');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn8');
    I.click('#uploadBerkasBtn8');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn9');
    I.click('#uploadBerkasBtn9');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn10');
    I.click('#uploadBerkasBtn10');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn11');
    I.click('#uploadBerkasBtn11');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
    I.click('#btn-popup-yes');
    I.click('Tutup');
});

Given('The Vendor must click "Select File" button where found on the "Pilih Dokumen" form with invalid size file', () => {
    // I.waitForElement('#uploadBerkasBtn1');
    // I.click('#uploadBerkasBtn1');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn2');
    // I.click('#uploadBerkasBtn2');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn3');
    // I.click('#uploadBerkasBtn3');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn4');
    // I.click('#uploadBerkasBtn4');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn5');
    // I.click('#uploadBerkasBtn5');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn6');
    // I.click('#uploadBerkasBtn6');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn7');
    // I.click('#uploadBerkasBtn7');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn8');
    // I.click('#uploadBerkasBtn8');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    // I.waitForElement('#uploadBerkasBtn9');
    // I.click('#uploadBerkasBtn9');
    // I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    // I.see('File size too large');
    // I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn10');
    I.click('#uploadBerkasBtn10');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    I.see('File size too large');
    I.click('Tutup');
    I.waitForElement('#uploadBerkasBtn11');
    I.click('#uploadBerkasBtn11');
    I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
    I.see('File size too large');
    I.click('Tutup');

});  

Given('The Vendor can click "Tutup" button to upload the "Dokumen"', () => {
    
});

Given('The Vendor can see the "Dokumen" in "Dokumen Legal" grid', () => {
    
});

Given('The Vendor will see warning on the field for "Maksimum Ukuran File 2 MB"', () => {

});

Given('The Vendor can remove the file', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});