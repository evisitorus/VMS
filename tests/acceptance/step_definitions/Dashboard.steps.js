const { I } = inject();

Given('The Vendor see dashboard page', () => {
    I.see('Dashboard');
});

Given('The Vendor will get a summary information of Tender', () => {
    I.see('Total Tender');
    I.see('Tender Diikuti');
    I.see('Tender Berjalan');
    I.see('Tender Ditolak');
});

Given('The Vendor will shown graphical and information of vendor status', () => {
    I.see('Status Anda');
    I.see('Terdaftar Sejak:');
    I.see('Pengkinian data terakhir:');
    I.see('Terverifikasi Sejak:');
});

Given('The Vendor will shown progress of completion on each aspect', () => {
    I.see('Informasi Umum');
    I.see('Tata Kelola Perusahaan');
    I.see('Aspek Finansial');
    I.see('Aspek Legal');
    I.see('Riwayat Pekerjaan');
});

Given('The Vendor already see summary information of his or her company level on dashboard', () => {

});