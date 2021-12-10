const { I } = inject();

Given('The Vendor already add information in regards to {string}', () => {

});

Given('The Vendor wants manage {string} from the Company', () => {

});

Given('The Vendor wants to add information in regards to {string} on {string} which part of {string} form', () => {

});

Given('The Vendor must clicks button {string} where found on the left-buttom of {string} to add records information in regards to {string}', () => {

});

Given('The Vendor will see pop-up form of {string} which appear in front of {string} form', () => {

});

Given('The Vendor must click {string} button to save information of {string}', () => {

});

Given('The Vendor will see that pop-up form already closed when she or he clicks {string}', () => {

});

Given('The Vendor must click {string} button where found on the left-buttom of {string} form', () => {

});

Given('The Vendor select "Yes" option', () => {

});

Given('The Vendor will see progress of upgrade level on {string}', () => {

});

Given('The Vendor already manage her or his company information by adding Riwayat Pekerjaan from the company', () => {

});

Given('The Vendor upload document more than 2 MB', () => {

});

Given('The Vendor warning message tooltip on lampiran {string}', () => {

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
        default:
            I.click(form1);
            break;
    }
});