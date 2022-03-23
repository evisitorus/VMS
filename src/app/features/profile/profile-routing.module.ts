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
import {ProfileDashboardComponent} from "./pages/profile-dashboard/profile-dashboard.component";
import { ProfileAspekLegalComponent } from './pages/profile-aspek-legal/profile-aspek-legal.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {path: 'profile-verification', component: ProfileVerifikasiKelengkapanComponent, canActivate: [AuthGuard]},
  {path: 'profile-information', component: ProfileInformasiPerusahaanComponent, canActivate: [AuthGuard]},
  {path: 'profile-person-in-charge', component: ProfilePersonInChargeComponent, canActivate: [AuthGuard]},
  {path: 'profile-aset', component: ProfileAsetComponent, canActivate: [AuthGuard]},
  {path: 'profile-dokumen', component: ProfileDokumenComponent, canActivate: [AuthGuard]},
  {path: 'profile-aspek-legal', component: ProfileAspekLegalComponent, canActivate: [AuthGuard]},
  {path: 'profile-riwayat-pekerjaan', component: ProfileRiwayatPekerjaanComponent, canActivate: [AuthGuard]},
  {path: 'profile-alamat', component: ProfileAlamatComponent, canActivate: [AuthGuard]},
  {path: 'profile-laporan-keuangan', component: ProfileLaporanKeuanganComponent, canActivate: [AuthGuard]},
  {path: 'dashboard', component: ProfileDashboardComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
