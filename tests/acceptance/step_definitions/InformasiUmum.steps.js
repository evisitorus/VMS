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
            // I.amOnPage('/profile-information');
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
        case "Verifikasi Kelengkapan":
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
        case "":
            I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        default:
            I.click(form);
            break;
    }
});

Given('The Vendor must complete following inputs where found on {string} form', (form) => {
    switch (form) {
        case "Data Perusahaan":
            I.attachFile('#imgPerusahaanUpload input[type=file]', './tests/acceptance/_fixture/logo_justin.jpg');
            I.checkOption('#NIBbtnTrue');
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
        case "":
            I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        case "":
                I.see('');
            break;
        default:
            I.click(form);
            break;
    }
});

Given('The Vendor has fill all field And The Vendor wants to save information of {string}', () => {

});

Given('The Vendor must click "Simpan" button where found on the Right-bottom of {string} form', (button) => {
    switch (button) {
        case "Data Perusahaan":
            I.click('#saveInformasiPerusahaanBtn');
            break;
        case "":
            I.see('');
            break;
        case "":
            I.see('');
            break;
        case "":
            I.see('');
            break;
        case "":
            I.see('');
            break;
        case "":
            I.see('');
            break;
        case "":
            I.see('');
            break;
        default:
            I.click(button);
            break;
    }
});

Given('The Vendor will see confirmation message', () => {
    I.see('Konfirmasi');
    I.see('Simpan profil perusahaan ?');
});

Given('The Vendor must select "Ya" option', () => {
    I.click('Yes');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see {string} in the form', () => {

});

Given('The Vendor must complete following inputs where found on {string} form without NIB', (form) => {
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
Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});