const { I } = inject();

Given('The Vendor wants to see his or her completion status on each aspect', () => {
    // I.seeInCurrentUrl('/profile-verification');
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
    I.seeElement('#btn-submit-verification');
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
    I.seeElement('#btn-submit-verification');
}); 

Given('The Vendor can click the "Ajukan Verifikasi" button on the right-bottom of the page', () => {
    I.click('#btn-submit-verification');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see the button change into "Batalkan Pengajuan" button on the right-bottom of the page', () => {
    I.see('Batalkan Pengajuan');
    I.seeElement('#btn-cancel-verification');
});

Given('The Vendor has not completed all aspect', () => {

});

Given('The Vendor will see "Pengajuan Verifikasi" page', () => {
    I.see('Pengajuan Verifikasi');

});

Given('The Vendor will see incomplete aspect status has changed into "Incompleted"', () => {
    I.see('Incomplete');
});

Given('The Vendor will not see checked checkbox on the incomplete aspect', () => {

});

Given('The Vendor wants to submit his or her verification request', () => {

});

Given('The Vendor will see pop-up notification', () => {
    I.see('Lengkapi data terlebih dahulu');

});

Given('The Vendor has submit verification request', () => {
    I.click('#btn-submit-verification');
    I.click('#btn-popup-yes');
});

Given('The Vendor wants to cancel his or her verification request', () => {
    I.see('Batalkan Pengajuan');
    I.seeElement('#btn-cancel-verification');
});

Given('The Vendor can click the "Batalkan Pengajuan" button on the right-bottom of the page', () => {
    I.click('#btn-cancel-verification');
});

Given('The Vendor will see confirmation message for cancel of verification request', () => {
    I.see('Anda akan membatalkan Pengajuan Verifikasi ?');
});

Given('The Vendor select "Ya" option', () => {
    I.click('Ya');
    I.click('#btn-popup-yes');
});

Given('The Vendor will see the button change into "Ajukan Verifikasi" button on the right-bottom of the page', () => {
    I.see('Ajukan Verifikasi');
    I.seeElement('#btn-submit-verification');

});

Given('The Vendor select "Tidak" option', () => {
    I.click('Tidak');
});

Given('The Vendor will see "Batalkan Pengajuan" button on the right-bottom of the page', () => {
    I.see('Batalkan Pengajuan');
    I.seeElement('#btn-cancel-verification');
});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});

Given('', () => {

});
