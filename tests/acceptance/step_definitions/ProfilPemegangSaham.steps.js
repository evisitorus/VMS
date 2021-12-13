const { I } = inject();

Given('The Vendor already define information from {string}', (form) => {
    switch (form) {
        case "Informasi Perusahaan":
            I.amOnPage('/profile-information');
            break;
        case "Informasi Bank":
            I.waitForElement('#input-keuangan-nama-bank input[class=k-input]');
            I.seeInField('#input-keuangan-nama-bank input[class=k-input]', 'Bank BRI');
            break;
        default:
            I.waitForElement(form);
            break;
    }
});

Given('The Vendor will see that pop-up form already closed when clicks {string}', () => {
    I.see('Informasi Pemegang Saham');
    I.see('Sukses');
    I.click('#btn-popup-yes');
    I.dontSeeElement('.k-window');
});

Given('The Vendor can {string} the {string} where found on the right-side of grid to see another list of {string} on {string}', () => {

});

Given('The Vendor can repeat process to add {string} by repeat process from line 21 to 46', () => {

});

Given('The Vendor can continue to fill information in regards to {string} by clicking {string} button where placed on the right-buttom of {string} Grid', () => {

});

Given('The Vendor not define anything on {string} form or only define several fields which needed', () => {
    I.fillField('#kepemilikanSaham input[role=spinbutton]', '50');
    I.click('#submitPemegangSaham');
});

Given('The Vendor will get warning message tooltip on each mandatory fields as {string}', () => {
    I.seeElement('.k-window');
    I.see('Data tidak boleh kosong.');
    I.click('#btn-popup-yes');
});

Given('The Vendor must define right information from {string} while can continue to next process to define {string}', () => {
    I.amOnPage('/profile-information');
});

Given('The Vendor will see pop-up message appear', () => {
    I.see('Konfirmasi');
    I.see('No');
    I.see('Yes');
});

Given('The Vendor must select {string} option on pop-up message', () => {
    I.click('Yes');
    I.see('Berhasil menghapus data');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see information which state for every changes should be re-check by verificator', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
    I.click('#btn-popup-yes');
});

Given('The Vendor wants to edit one of record from {string} on {string} which part of {string} form', (form1,form2,form3) => {
    switch (form1) {
        case "Pemegang Saham":
            I.click('.ng-tns-c66-2.k-link');
            break;
        case "Pegawai":
            I.click('.ng-tns-c66-3.k-link');
            break;
        case "Data Perusahaan":
            I.click('.ng-tns-c66-1.k-link');
            break;
        default:
            I.click(form1);
            break;
    }
});

Given('The Vendor can modify data which displayed on {string} form', (form1) => {
    switch (form1) {
        case "Pemegang Saham":
            I.fillField('#namaPemegangSaham input[class=k-input]', 'Steven Rogers Barton');
            I.click('#BadanUsaha');
            I.click('#Asing');
            I.click('#kepemilikanSaham input[role=spinbutton]');
            I.fillField('#kepemilikanSaham input[role=spinbutton]', '35');
            break;
        case "Alamat":
            I.fillField('#namaAlamat input[class=k-input]', 'Kantor Operasional');
            I.fillField('#alamat input[class=k-input]', 'Jl. Letnan Jenderal S. Parman Kav 102');
            I.click('#provinsi.formField');
            I.fillField('#provinsi.formField', 'Jawa Barat');
            I.pressKey('Enter');
            I.click('#kota.formField');
            I.fillField('#kota.formField', 'Kabupaten Bandung');
            I.pressKey('Enter');
            I.click('#kecamatan.formField');
            I.fillField('#kecamatan.formField', 'Cibeunying');
            I.pressKey('Enter');
            I.click('#kelurahan.formField');
            I.fillField('#kelurahan.formField', 'Cicaheum');
            I.pressKey('Enter');
            I.click('#kodepos.formField');
            I.fillField('#kodepos.formField', '42015');
            I.pressKey('Enter');
            break;
        case "Riwayat Pekerjaan":
            I.fillField('#namaPekerjaan input[class=k-input]', 'Konstruksi Gedung Apartemen Untuk Anggota Avengers');
            I.fillField('#pemberiPekerjaan input[class=k-input]', 'PT. Wijaya Karya (WIKA)');
            I.click('#nilaiPekerjaan input[role=spinbutton]');
            I.fillField('#nilaiPekerjaan input[role=spinbutton]', '1000000000');
            I.click('#tahunPekerjaan input[role=spinbutton]');
            I.fillField('#tahunPekerjaan input[role=spinbutton]', '2015');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            break;
        case "Pegawai":
            I.fillField('#nikPegawaiInput input[class=k-input]', '1234567');
            I.fillField('#firstName input[class=k-input]', 'James Bucky');
            I.fillField('#lastName input[class=k-input]', 'Barnes');
            I.click('#tipeKaryawanDropdown input[class=k-input]');
            I.fillField('#tipeKaryawanDropdown input[class=k-input]', 'Tenaga Ahli');
            I.pressKey('Enter');
            I.fillField('#jabatanKaryawanInput input[class=k-input]', 'CIO');
            I.click('#bidangPekerjaan input[class=k-input]');
            I.fillField('#bidangPekerjaan input[class=k-input]', 'IT');
            I.pressKey('Enter');
            I.attachFile('#resumeKaryawanUpload input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        default:
            I.click(form1);
            break;
    }
});

Given('The Vendor will see information changes from selected record from {string} on {string}', () => {
    I.see('Steven Rogers Barton');
    I.see('Badan Usaha');
    I.see('Asing');
    I.see('35.00');
});

Given('The Vendor will see that update pop-up form already closed when clicks {string}', () => {
    I.see('Berhasil memperbarui data');
    I.click('#btn-popup-yes');
    I.dontSeeElement('.k-window');
});

Given('', () => {

});

Given('', () => {

});