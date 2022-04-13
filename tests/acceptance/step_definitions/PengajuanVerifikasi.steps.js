const { I } = inject();

Given('The Vendor wants to see his or her completion status on each aspect', () => {
    I.seeInCurrentUrl('/profile-verification');
});

Given('The Vendor can see the aspect of verification process', () => {
    I.see('Pengajuan Verifikasi');
    I.see('Informasi Umum');
    I.see('Tata Kelola Perusahaan');
    I.see('Aspek Finansial');
    I.see('Aspek Legal');
    I.see('Riwayat Pekerjaan');
});

Given('The Vendor can see the "Ajukan Verifikasi" button on the right-bottom of the page', () => {
    I.see('Ajukan Verifikasi');
    I.seeElement('#btn-tambah-dokumen');
});

Given('The Vendor has completed all aspect', () => {
    I.see('Completed');
    I.dontSee('Incomplete');
});

Given('The Vendor will see completed aspect status has changed into "Completed on date"', () => {
    I.see('Completed on');
});

Given('The Vendor will see checked checkbox on completed aspect', () => {
    
});

Given('The Vendor wants to submit his or her verification request', () => {
    I.seeElement('#btn-tambah-dokumen');
}); 

Given('The Vendor can click the "Ajukan Verifikasi" button on the right-bottom of the page', () => {
    I.click('#btn-tambah-dokumen');
});

Given('The Vendor will see the button change into "Batalkan Pengajuan" button on the right-bottom of the page', () => {
    I.see('Batalkan Pengajuan');
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