const { I } = inject();

Given('The Vendor already add information in regards to {string}', () => {
    I.amOnPage('/profile-information');
});

Given('The Vendor wants manage {string} which needed for further verification from the company', () => {
    
});

Given('The Vendor must click {string} menu where found on {string} of {string}', (button1, button2, button3) => {
});

Given('The Vendor must click {string} Tab', (sidebar) => {
    switch (sidebar) {
        case "Dokumen":
            I.waitForElement('#k-panelbar-0-item-sidebar-dokumen');
            I.click('#k-panelbar-0-item-sidebar-dokumen');
            break;
        case "Profil Perusahaan":
            I.waitForElement('#k-panelbar-1-item-sidebar-profile-information');
            I.click('#k-panelbar-1-item-sidebar-profile-information');
            break;
        case "PIC":
            I.waitForElement('#k-panelbar-0-item-sidebar-pic');
            I.click('#k-panelbar-0-item-sidebar-pic');
            break;
        case "Alamat":
            I.waitForElement('#k-panelbar-0-item-sidebar-alamat');
            I.click('#k-panelbar-0-item-sidebar-alamat');
            break;
        case "Laporan Keuangan":
            I.waitForElement('#k-panelbar-0-item-sidebar-laporan-keuangan');
            I.click('#k-panelbar-0-item-sidebar-laporan-keuangan');
            break;
        case "Riwayat Pekerjaan":
            I.waitForElement('#k-panelbar-0-item-sidebar-riwayat-pekerjaan');
            I.click('#k-panelbar-0-item-sidebar-riwayat-pekerjaan');
            break;
        case "Asset":
            I.waitForElement('#k-panelbar-0-item-sidebar-aset');
            I.click('#k-panelbar-0-item-sidebar-aset');
            break;
        default:
            I.click(sidebar);
            break;
    }
});

Given('The Vendor will see {string} form', (form) => {
    switch (form) {
        case "Dokumen":
            I.amOnPage('/profile-dokumen');
            break;
        case "Asset":
            I.amOnPage('/profile-aset');
            break;
        case "Informasi Keuangan":
            I.amOnPage('/profile-laporan-keuangan');
            break;
        case "Alamat":
            I.amOnPage('/profile-alamat');
            break;
        case "Riwayat Pekerjaan":
            I.amOnPage('/profile-riwayat-pekerjaan');
            break;
        default:
            I.amOnPage(form);
            break;
    }
});

Given('The Vendor wants to add information in regards to {string} on {string} which part of {string} form', () => {

});

Given('The Vendor must clicks button {string} where found on the left-buttom of {string} to add records information in regards to {string}', (button1, button2, button3) => {
    switch (button3) {
        case "Dokumen":
            I.waitForElement('#btn-tambah-dokumen');
            I.click('#btn-tambah-dokumen');
            break;
        case "Pemegang Saham":
            I.waitForElement('#btn-addPemegangSaham');
            I.click('#btn-addPemegangSaham');
            break;
        case "Asset":
            I.waitForElement('#btn-tambah-asset');
            I.click('#btn-tambah-asset');
            break;
        case "Neraca Keuangan":
            I.waitForElement('#btn-tambah-neraca');
            I.click('#btn-tambah-neraca');
            break;
        case "SPT Tahunan":
            I.waitForElement('#btn-tambah-spt');
            I.click('#btn-tambah-spt');
            break;
        case "Alamat":
            I.waitForElement('#btn-tambah-alamat');
            I.click('#btn-tambah-alamat');
            break;
        case "Riwayat Pekerjaan":
            I.waitForElement('#addPekerjaan');
            I.click('#addPekerjaan');
            break;
        default:
            I.click(button3);
            break;
    }
});

Given('The Vendor will see pop-up form of {string} which appear in front of {string} form', (form1, form2) => {
    switch (form2) {
        case "Dokumen":
            I.waitForElement('#input-nomor-dokumen input[class=k-input]');
            I.fillField('#input-nomor-dokumen input[class=k-input]', 'vms/1/11/21/bdg');
            I.waitForElement('#input-nama-dokumen input[class=k-input]');
            I.fillField('#input-nama-dokumen input[class=k-input]', 'Akta Pendirian Perusahaan');
            I.waitForElement('#input-berlaku-sampai input[class=k-input]');
            I.fillField('#input-berlaku-sampai input[class=k-input]', '11242021');
            I.waitForElement('#input-lampiran-file input[type=file]');
            I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_image.jpg');
            break;
        case "Pemegang Saham":
            I.fillField('#namaPemegangSaham input[class=k-input]', 'Steven Rogers');
            I.click('#Perseorangan');
            I.click('#Lokal');
            I.fillField('#kepemilikanSaham input[role=spinbutton]', '50');
            break;
        case "Asset":
            I.waitForElement('#input-nama-asset input[class=k-input]');
            I.fillField('#input-nama-asset input[class=k-input]', 'Crane');
            I.waitForElement('#input-jumlah-asset input[role=spinbutton]');
            I.fillField('#input-jumlah-asset input[role=spinbutton]', 100);
            I.waitForElement('#input-tahun-asset input[class=k-input]');
            I.fillField('#input-tahun-asset input[class=k-input]', '2012');
            break;
        case "Neraca Keuangan":
            // I.waitForElement('#input-neraca-tahun input[role=spinbutton]');
            // I.click('#input-neraca-tahun input[role=spinbutton]');
            I.fillField('#input-neraca-tahun input[role=spinbutton]', 2015);
            I.wait(10);
            I.seeInField('#input-neraca-tahun input[role=spinbutton]', 2015);
            // I.waitForElement('#input-neraca-aktiva input[role=spinbutton]');
            I.fillField('#input-neraca-aktiva input[role=spinbutton]', 1000000000);
            // I.waitForElement('#input-neraca-pasiva input[role=spinbutton]');
            I.fillField('#input-neraca-pasiva input[role=spinbutton]', 1000000000);
            // I.waitForElement('#input-neraca-ekuitas input[role=spinbutton]');
            I.fillField('#input-neraca-ekuitas input[role=spinbutton]', 1000000000);
            // I.waitForElement('#input-neraca-omzet input[role=spinbutton]');
            I.fillField('#input-neraca-omzet input[role=spinbutton]', 1000000000);
            break;
        case "SPT Tahunan":
            I.waitForElement('#input-spt-tahun input[class=k-input]');
            I.fillField('#input-spt-tahun input[class=k-input]' , '2015');
            I.waitForElement('#input-spt-nomor-dokumen input[class=k-input]');
            I.fillField('#input-spt-nomor-dokumen input[class=k-input]', '12340');
            I.waitForElement('#input-spt-lampiran input[type=file]');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            break;
        case "Riwayat Pekerjaan":
            I.fillField('#namaPekerjaan input[class=k-input]', 'Steven Rogers Barton');
            I.fillField('#pemberiPekerjaan input[class=k-input]', 'Steven Rogers Barton');
            I.fillField('#nilaiPekerjaan input[class=k-numeric-wrap]', 'Steven Rogers Barton');
            I.fillField('#tahunPekerjaan input[class=k-numeric-wrap]', 'Steven Rogers Barton');
            I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            break;
        default:
            I.waitForElement(form2);
            break;
    }
});

Given('The Vendor must click {string} button to save information of {string}', (button1, button2) => {
    switch (button2) {
        case "Dokumen":
            I.waitForElement('#btn-simpan');
            I.click('#btn-simpan');
            break;
        case "Pemegang Saham":
            I.waitForElement('#submitPemegangSaham');
            I.click('#submitPemegangSaham');
            break;
        case "Asset":
            I.waitForElement('#btn-simpan');
            I.click('#btn-simpan');
            break;
        case "Keuangan":
            I.waitForElement('#btn-simpan-profile-keuangan');
            I.click('#btn-simpan-profile-keuangan');
            break;
        case "Neraca Keuangan":
            I.waitForElement('#btn-simpan-neraca');
            I.click('#btn-simpan-neraca');
            break;
        case "SPT Tahunan":
            I.waitForElement('#btn-simpan-spt');
            I.click('#btn-simpan-spt');
            break;
        case "Riwayat Pekerjaan":
            I.waitForElement('#submitPekerjaan');
            I.click('#submitPekerjaan');
            break;
        case "Alamat":
            I.waitForElement('#btn-submit-alamat');
            I.click('#btn-submit-alamat');
            break;
        default:
            I.click(button2);
            break;
    }    
});

Given('The Vendor will see that pop-up form already closed when she or he clicks {string}', () => {
    I.see('Berhasil menyimpan data');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see first 5 lists of {string} on {string}', (list1, list2) => {
    switch (list1) {
        case "Dokumen":
            I.seeElement('#btn-update');
            I.seeElement('#btn-delete');
            break;
        case "Pemegang Saham":
            I.see('Steven Rogers');
            I.see('Perseorangan');
            I.see('Lokal');
            I.see('50');
            break;
        default:
            I.waitForElement(list1);
            break;
    }
});

Given('The Vendor attach file {string} with value {string}', (field, data) => {
    I.AttachFileWithHelper(field, data);
});

Given('The Vendor can {string} the {string} where found on the right-side of grid to see another list of {string} on {string}', () => {

});

Given('The Vendor will get flag as {string} for checklist  if already upload at least one record on {string} and will be displayed on {string} form also {string} form', () => {

});

Given('The Vendor will see progress of upgrade level on {string}', () => {

});

Given('The Vendor already manage her or his company information by uploading necessary documents', () => {

});

Given('The Vendor upload document more than 2 MB', () => {
    I.see('File tidak valid');
    I.click('#btn-popup-yes');

});

Given('The Vendor warning message tooltip on lampiran {string}', () => {

});

Given('The Vendor can not continue to add document information', () => {
    I.see('File tidak valid');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor can not continue to add document information {string}', (grid) => {
    switch (grid) {
        case "Riwayat Pekerjaan":
            I.see('File tidak valid');
            I.waitForElement('#btn-popup-yes');
            I.click('#btn-popup-yes');
            break;
        case "Dokumen":
            I.see('File tidak valid');
            I.waitForElement('#btn-popup-yes');
            I.click('#btn-popup-yes');
            break;
        default:
            I.waitForElement(list1);
            break;
    }
});