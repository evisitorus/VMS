const { I } = inject();

Given('The User is on VMS Landing Page', () => {
    I.amOnPage('/');
    I.see('Governance, Transaparansi dan Digital Procurement');
    I.see('Efisiensi dan Sinergi Berkelanjutan');
    I.see('Mendorong Pemberdayaan UMKM');
    I.see('Optimalisasi TKDN');
});

Given('The User accesses {string} section', () => {
    I.seeNumberOfElements('.k-listview-item', 10);
});

Given('The User will see first ten list of Tenders which conduct by BUMN on {string} as default state', () => {
    I.seeElement('#logoPerusahaan');
    I.seeElement('#namaPerusahaan');
    I.seeElement('#namaTender');
    I.seeElement('#statusTender');
    I.seeElement('#metodeTender');
    I.seeElement('#batasAkhirRegistrasi');
    I.seeElement('#nilaiHPS');
    I.seeElement('#lokasi');
    I.seeElement('#bidangUsaha');
    I.seeElement('#tanggalPosting');
});

Given('The User can move to another page by clicking "pagination button"  to next 10 list of Tenders', () => {
    I.seeElement('.k-link k-pager-nav');
});

Given('The User can see list of Tender on {string}', () => {

});