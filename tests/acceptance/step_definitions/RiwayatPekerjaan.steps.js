const { I } = inject();

Given('The Vendor must clicks button {string} where found on the left-buttom of {string} to add records information in regards to {string}', () => {

});

Given('The Vendor must click {string} button where found on the left-buttom of {string} form', () => {

});

Given('The Vendor already manage her or his company information by adding Riwayat Pekerjaan from the company', () => {

});

Given('The Vendor upload document more than 2 MB', () => {

});

Given('The Vendor warning message tooltip on lampiran {string}', () => {

});

Given('The Vendor will see pop-up form of {string} which appear in front of {string} form with document more than 2 MB', (form1,form2) => {
    switch (form2) {
        case "Riwayat Pekerjaan":
            I.fillField('#namaPekerjaan input[class=k-input]', 'Konstruksi Gedung Apartemen');
            I.fillField('#pemberiPekerjaan input[class=k-input]', 'PT.WIKA');
            I.click('#nilaiPekerjaan input[role=spinbutton]');
            I.fillField('#nilaiPekerjaan input[role=spinbutton]', '2000000');
            I.click('#tahunPekerjaan input[role=spinbutton]');
            I.fillField('#tahunPekerjaan input[role=spinbutton]', '2012');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/image_3mb.png');
            break;
        default:
            break;
    }
});

Given('The Vendor will see pop-up form of {string} which appear in front of {string} form with invalid file extension', (form1,form2) => {
    switch (form2) {
        case "Riwayat Pekerjaan":
            I.fillField('#namaPekerjaan input[class=k-input]', 'Konstruksi Gedung Apartemen');
            I.fillField('#pemberiPekerjaan input[class=k-input]', 'PT.WIKA');
            I.click('#nilaiPekerjaan input[role=spinbutton]');
            I.fillField('#nilaiPekerjaan input[role=spinbutton]', '2000000');
            I.click('#tahunPekerjaan input[role=spinbutton]');
            I.fillField('#tahunPekerjaan input[role=spinbutton]', '2012');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/image.gif');
            break;
        default:
            break;
    }
});

Given('The Vendor can modify data which displayed on {string} form with document more than 2 MB', (form1) => {
    switch (form1) {
        case "Riwayat Pekerjaan":
            I.fillField('#namaPekerjaan input[class=k-input]', 'Konstruksi Gedung Apartemen');
            I.fillField('#pemberiPekerjaan input[class=k-input]', 'PT.WIKA');
            I.click('#nilaiPekerjaan input[role=spinbutton]');
            I.fillField('#nilaiPekerjaan input[role=spinbutton]', '2000000');
            I.click('#tahunPekerjaan input[role=spinbutton]');
            I.fillField('#tahunPekerjaan input[role=spinbutton]', '2012');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/image_3mb.png');
            break;
        case "Pegawai":
            I.fillField('#nikPegawaiInput input[class=k-input]', '1234567');
            I.fillField('#firstName input[class=k-input]', 'James Bucky');
            I.fillField('#lastName input[class=k-input]', 'Barnes');
            I.click('#tipeKaryawanDropdown.k-dropdown');
            I.fillField('#tipeKaryawanDropdown.k-dropdown', 'Tenaga Ahli');
            I.pressKey('Enter');
            I.fillField('#jabatanKaryawanInput input[class=k-input]', 'CTO');
            I.click('#bidangPekerjaan.k-dropdown');
            I.fillField('#bidangPekerjaan.k-dropdown', 'IT');
            I.pressKey('Enter');
            I.attachFile('#resumeKaryawanUpload input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
            break;
        case "PIC":
            I.attachFile('#input-pic-avatar input[type=file]', './tests/acceptance/_fixture/image_3mb.png');
            I.fillField('#input-name.k-textbox', 'George Grey');
            I.fillField('#input-phone-number.k-textbox', '08777777777');
            break;
        case "Dokumen":
            I.click('#tipeDokumen.k-dropdown');
            I.fillField('#tipeDokumen.k-dropdown', 'Dokumen Akta (Mandatory)');
            I.pressKey('Enter');
            I.waitForElement('#input-nomor-dokumen input[class=k-input]');
            I.fillField('#input-nomor-dokumen input[class=k-input]', 'vms/1/11/21/bdg');
            I.waitForElement('#input-nama-dokumen input[class=k-input]');
            I.fillField('#input-nama-dokumen input[class=k-input]', 'Akta Pendirian Perusahaan');
            I.waitForElement('#input-berlaku-sampai input[class=k-input]');
            I.fillField('#input-berlaku-sampai input[class=k-input]', '11242025');
            I.waitForElement('#input-lampiran-file input[type=file]');
            I.attachFile('#input-lampiran-file input[type=file]', './tests/acceptance/_fixture/sample_pdf_10mb.pdf');
            break;
        default:
            break;
    }
});

Given('The Vendor can modify data which displayed on {string} form with invalid file extension', (form1) => {
    switch (form1) {
        case "Riwayat Pekerjaan":
            I.fillField('#namaPekerjaan input[class=k-input]', 'Konstruksi Gedung Apartemen');
            I.fillField('#pemberiPekerjaan input[class=k-input]', 'PT.WIKA');
            I.click('#nilaiPekerjaan input[role=spinbutton]');
            I.fillField('#nilaiPekerjaan input[role=spinbutton]', '2000000');
            I.click('#tahunPekerjaan input[role=spinbutton]');
            I.fillField('#tahunPekerjaan input[role=spinbutton]', '2012');
            I.attachFile('#input-spt-lampiran input[type=file]', './tests/acceptance/_fixture/image_3mb.png');
            break;
        case "Pegawai":
            I.fillField('#nikPegawaiInput input[class=k-input]', '1234567');
            I.fillField('#firstName input[class=k-input]', 'James Bucky');
            I.fillField('#lastName input[class=k-input]', 'Barnes');
            I.click('#tipeKaryawanDropdown.k-dropdown');
            I.fillField('#tipeKaryawanDropdown.k-dropdown', 'Tenaga Ahli');
            I.pressKey('Enter');
            I.fillField('#jabatanKaryawanInput input[class=k-input]', 'CTO');
            I.click('#bidangPekerjaan.k-dropdown');
            I.fillField('#bidangPekerjaan.k-dropdown', 'IT');
            I.pressKey('Enter');
            I.attachFile('#resumeKaryawanUpload input[type=file]', './tests/acceptance/_fixture/image_1mb.png');
            break;
        case "PIC":
            I.attachFile('#input-pic-avatar input[type=file]', './tests/acceptance/_fixture/sample_pdf.pdf');
            I.fillField('#input-name.k-textbox', 'George Grey');
            I.fillField('#input-phone-number.k-textbox', '08777777777');
            break;
        default:
            break;
    }
});