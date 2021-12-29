const { I } = inject();

Given('The User is on VMS Landing Page', () => {
    I.amOnPage('/');
    I.see('Tender BUMN');
    I.see('Portal Informasi Tender BUMN');
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
    I.seeElement('button.k-pager-first');
    I.seeElement('button.k-pager-last');
    I.seeElement('button.k-link.k-pager-nav span.k-i-arrow-e');
    I.seeElement('button.k-link.k-pager-nav span.k-i-arrow-w');
    I.seeElement('ul.k-pager-numbers li');
});

Given('The User can see list of Tender on {string}', () => {
  I.seeElement('.k-listview-item');
});
