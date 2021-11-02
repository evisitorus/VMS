import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileVerifikasiKelengkapanComponent} from "./pages/profile-verifikasi-kelengkapan/profile-verifikasi-kelengkapan.component";
import {ProfileInformasiPerusahaanComponent} from "./pages/profile-informasi-perusahaan/profile-informasi-perusahaan.component";
import {ProfilePersonInChargeComponent} from "./pages/profile-person-in-charge/profile-person-in-charge.component";
import {ProfileAsetComponent} from "./pages/profile-aset/profile-aset.component";
import {ProfileDokumenComponent} from "./pages/profile-dokumen/profile-dokumen.component";
import {ProfileRiwayatPekerjaanComponent} from "./pages/profile-riwayat-pekerjaan/profile-riwayat-pekerjaan.component";
import {ProfileAlamatComponent} from "./pages/profile-alamat/profile-alamat.component";
import {ProfileLaporanKeuanganComponent} from "./pages/profile-laporan-keuangan/profile-laporan-keuangan.component";

const routes: Routes = [
  {path: 'profile-verification', component: ProfileVerifikasiKelengkapanComponent},
  {path: 'profile-information', component: ProfileInformasiPerusahaanComponent},
  {path: 'profile-person-in-charge', component: ProfilePersonInChargeComponent},
  {path: 'profile-aset', component: ProfileAsetComponent},
  {path: 'profile-dokumen', component: ProfileDokumenComponent},
  {path: 'profile-riwayat-pekerjaan', component: ProfileRiwayatPekerjaanComponent},
  {path: 'profile-alamat', component: ProfileAlamatComponent},
  {path: 'profile-laporan-keuangan', component: ProfileLaporanKeuanganComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
