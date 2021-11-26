const { I } = inject();

Given('The Vendor already add information in regards to {string}', () => {
    I.amOnPage('/login');
    I.waitForElement('#input-email input[class=k-input]');
    I.fillField('#input-email input[class=k-input]', 'admin@abadijaya.co.id');
    I.waitForElement('#input-password input[class=k-input]');
    I.fillField('#input-password input[class=k-input]', '1234');
    I.waitForElement('#btn-login');
    I.click('#btn-login');
    I.waitForElement('#btn-popup-yes');
    I.click('#btn-popup-yes');

    I.amOnPage('/profile-information');
});

Given('The Vendor wants manage {string} which needed for further verification from the company', () => {
    
});

Given('The Vendor must click {string} menu where found on {string} of {string}', () => {
    // I.waitForElement('#k-panelbar-0-item-sidebar-kelola-akun [ng-reflect-id=sidebar-kelola-akun]');
    // // I.click('#k-panelbar-0-item-sidebar-kelola-akun span]');
});

Given('The Vendor must click {string} Tab', () => {
    I.waitForElement('#k-panelbar-1-item-sidebar-dokumen');
    I.click('#k-panelbar-1-item-sidebar-dokumen');
});

Given('The Vendor will see {string} form', () => {
    I.amOnPage('/profile-dokumen');
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
        default:
            I.waitForElement(button2);
            break;
    }    
});

Given('The Vendor will see that pop-up form already closed when she or he clicks {string}', () => {
    // switch (button2) {
    //     case "Dokumen":
            // I.waitForElement('#btn-simpan');
    //         I.click('#btn-simpan');
    //         break;
    //     case "Pemegang Saham":
    //         I.waitForElement('#submitPemegangSaham');
    //         I.click('#submitPemegangSaham');
    //         break;
    //     default:
    //         I.waitForElement(button2);
    //         break;
    // }
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