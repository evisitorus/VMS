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
        case "Pemegang Saham":
            I.see('Tata Kelola Perusahaan');
            I.see('Pemegang Saham');
            break;
        case "":
            I.see('');
            I.see('');
            break;
        case "":
            I.see('');
            I.see('');
            break;
        case "":
            I.see('');
            I.see('');
            break;
        case "":
            I.see('');
            I.see('');
            break;
        case "":
            I.see('');
            I.see('');
            break;
        case "":
            I.see('');
            I.see('');
            break;
        case "":
            I.see('');
            I.see('');
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
            I.see(form1);
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
        case "Korespondensi":
            I.click('#btn-tambah-alamat');
            break;
        case "Pemegang Saham Grid":
            I.click('#btn-addPemegangSaham');
            break;
        default:
            I.see(form2);
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
        default:
            I.see(form1);
            break;
    }  
});

Given('The Vendor must click "Batal" button where found on the Right-bottom of {string} form', (form) => {
    switch (form) {
        case "Korespondensi":
            I.click('#btn-batal-alamat');
            break;
        case "Pemegang Saham":
            I.click('#closePemegangSaham');
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

Given('The Vendor must clicks button {string} where found on each row of records symbolize by {string}', (action, icon) => {
    switch (action) {
        case "Edit":
            I.click('#btn-update');
            break;
        case "Delete":
                I.click('#btn-delete');
            break;    
        default:
            break;
    }
});

Given('The Vendor see pop-up notification in front of {string} form', () => {
    I.see('Perubahan yang Anda lakukan belum aktif hingga diverifikasi oleh VMS Verifikator. Pastikan perubahan data perusahaan Anda sudah benar.');
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
        default:
            break;
    }
});

Given('The Vendor see updated {string} data in the form', () => {

});

Given('The Vendor wants to delete information regarding to {string} on {string} which part of {string} page', () => {

});

Given('The Vendor will see delete confirmation message', () => {
    I.see('Konfirmasi hapus data Pemegang Saham');
});

Given('The Vendor will see "Korespondensi" data status is "Terhapus" in the "Korespondensi Grid" on column "action"', () => {
    I.see('Terhapus');
});