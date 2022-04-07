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
        case "PIC":
            I.click('#btn-simpan');
            break;
        case "":
            I.click('');
            break;
        case "":
            I.click('');
            break;
        case "":
            I.click('');
            break;
        case "":
            I.click('');
            break;
        case "":
            I.click('');
            break;
        default:
            I.click(button);
            break;
    }
});

Given('The Vendor will see confirmation message', (raw_data) => {
    let data = JSON.parse(raw_data.content);
    I.see(data.message);
});

Given('The Vendor must select "Ya" option for {string} form', (button) => {
    switch (button) {
        case "Data Perusahaan":
            I.click('Yes');
            I.click('#btn-popup-yes');
            break;
        case "PIC":
            I.click('#btn-popup-yes');
            I.click('#btn-popup-yes');
            break;
        case "Korespondensi":
            I.see('');
            break;
        default:
            I.click(button);
            break;
    }
});

Given('The Vendor will see {string} data in the form', () => {

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

Given('The Vendor must click {string} to expand {string} form', () => {

});

Given('The Vendor wants to add information in regards to {string} on {string} which part of "Informasi Umum" page', (form1,form2) => {
    switch (form1) {
        case "PIC":
            I.click('#btn-perbarui');
            I.click('#btn-popup-yes');
            break;
        case "Korespondensi":
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
            I.click(form1);
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

Given('The Vendor wants to save information of "PIC"', () => {

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