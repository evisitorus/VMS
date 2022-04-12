const { I } = inject();

Given('The Vendor must click "Simpan" button which symbolize by "Check Icon" where found on the Right-top of "Jumlah Pegawai" form', () => {
    I.click('#submitJumlahPegawaiBtn');
});

Given('The Vendor will see "Jumlah Pegawai" in the form', () => {
    I.see('Jumlah Pegawai Domestik');
    I.see('Jumlah Pegawai Asing');
});

Given('The Vendor see the "Check Icon" change into "Pencil Icon"', () => {
    I.seeElement('#editJumlahPegawaiBtn');
});

Given('The Vendor can update total of employees of "Jumlah Pegawai" form', () => {
    I.click('#pegawaiDomestikInput');
    I.fillField('#pegawaiDomestikInput', '100');
    I.click('#pegawaiAsingInput');
    I.fillField('#pegawaiAsingInput', '100');
});

Given('The Vendor can see the first five list of documents in {string} at {string} page', () => {
    I.see('No.');
    I.see('Nama Dokumen');
    I.see('Tanggal Terbit');
    I.see('Tanggal Expired');
    I.see('Nama File');
    I.see('Action');
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