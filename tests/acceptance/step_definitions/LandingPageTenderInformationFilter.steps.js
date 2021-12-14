const { I } = inject();

Given('The User accesses Informasi Pengadaan section', () => {
  I.see('Informasi Pengadaan');
});

Given('The User wants to filter information to specific list', ()  => {

});

Given('The User must define parameter on filter section of {string} likes {string} or {string} or {string} or {string} or {string}', (
  string1, string2, string3, string4, string5, string6
)  => {
  I.see(string1);

  // Filter by Category
  I.click('#select-filter-category');
  I.fillField('#select-filter-category', 'Material Konstruksi');
  I.pressKey("Enter");

  // Order by
  I.click('#select-order-by');
  I.fillField('#select-order-by', 'Terbaru');
  I.pressKey("Enter");

  I.click('#btn-toggle-filter');
  I.waitForElement('#input-filter-keyword');
  I.fillField('#input-filter-keyword', 'Mobil');
});

Given('The User will see list of {string} based on parameters which define on {string} section', (string1, string2, doc)  => {
  I.see('Material Konstruksi', '#bidangUsaha');
  I.see('Aktif', '#statusTender');
  I.seeElement('#namaPerusahaan');
  I.seeElement('#namaTender');
  I.seeElement('#batasAkhirRegistrasi');
});

Given('The User already filter Tender Information', () => {
  I.click('#select-order-by');
  I.fillField('#select-order-by', 'Terbaru');
  I.pressKey("Enter");

  I.click('#select-filter-category');
  I.fillField('#select-filter-category', 'Material Konstruksi');
  I.pressKey("Enter");

  I.click('#btn-toggle-filter');
  I.waitForElement('#input-filter-keyword');
  I.fillField('#input-filter-keyword', 'Mobil');
});

Given('The User already see list information of "Tender" on "Tender Information Board"', () => {
  I.seeElement('#namaPerusahaan');
  I.seeElement('#namaTender');
  I.seeElement('#statusTender');
  I.seeElement('#bidangUsaha');
  I.seeElement('#batasAkhirRegistrasi');
});

Given('The User wants to clear "Filter" parameter', () => {
  I.seeElement('#btn-toggle-filter');
});

Given('The User must clicks "Reset Filter" button', () => {
  I.click('#btn-toggle-filter');
});

Given('The User will see that filter information back to empty', () => {
  I.seeElement('#select-filter-category');
  I.seeElement('#select-order-by');
  I.seeElement('#select-filter-bumn');
});

Given('The User will see that information of "Tender" on "Tender Information Board" will back to default state', () => {
  I.seeElement('#namaPerusahaan');
  I.seeElement('#namaTender');
  I.seeElement('#statusTender');
  I.seeElement('#bidangUsaha');
  I.seeElement('#batasAkhirRegistrasi');
});
