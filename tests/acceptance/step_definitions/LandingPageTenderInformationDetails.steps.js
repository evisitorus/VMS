const { I } = inject();

Given('The User selects one of {string} from {string}', () => {
    I.amOnPage('/tender/detail/1598');
});

Given('The User will brings to {string} form from selected {string}', () => {
    I.seeElement('.tender-title');
    I.seeElement('.tender-budget');
    I.seeElement('.tender-status');
    I.seeElement('.tender-content-title');
    I.see('Nama Tender');
    I.see('Nomor Tender');
    I.see('Metode Tender');
    I.see('Kategori Bidang Usaha');
    I.see('Waktu Akhir Pendaftaran');
    I.see('Waktu Akhir Kirim Penawaran');
    I.see('Lokasi Tender');
    I.see('Catatan Untuk Penyedia');
    I.see('Target Capaian TKDN');
    I.see('Tanggal diterbitkan Tender');
    I.see('Informasi PIC Pengadaan');
    I.see('Nama PIC Pengadaan');
    I.see('Email');
    I.see('Phone');
    I.see('Handphone');
    I.see('Informasi BUMN Penyelenggara');
    I.see('Nama BUMN');
    I.see('Portal Pengadaan');
});

Given('The User can see details information from selected Tender', () => {
    I.seeInCurrentUrl('/tender/detail/1598');
    I.click("Beranda");
    I.amOnPage('/');
});