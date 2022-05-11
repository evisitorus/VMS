import {ProfileMenuComponent} from './pages/profile-menu/profile-menu.component';
import {ProfileVerifikasiKelengkapanComponent} from './pages/profile-verifikasi-kelengkapan/profile-verifikasi-kelengkapan.component';
import {ProfileInformasiPerusahaanComponent} from './pages/profile-informasi-perusahaan/profile-informasi-perusahaan.component';
import { ProfileTataKelolaPerusahaanComponent } from './pages/profile-tata-kelola-perusahaan/profile-tata-kelola-perusahaan.component';
import {ProfilePersonInChargeComponent} from "./pages/profile-person-in-charge/profile-person-in-charge.component";
import {ProfileAsetComponent} from "./pages/profile-aset/profile-aset.component";
import {ProfileDokumenComponent} from "./pages/profile-dokumen/profile-dokumen.component";
import {ProfileRiwayatPekerjaanComponent} from "./pages/profile-riwayat-pekerjaan/profile-riwayat-pekerjaan.component";
import {ProfileLaporanKeuanganComponent} from "./pages/profile-laporan-keuangan/profile-laporan-keuangan.component";
import {ProfileDashboardComponent} from "./pages/profile-dashboard/profile-dashboard.component";
import {ProfileAlamatComponent} from "./pages/profile-alamat/profile-alamat.component"

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {SharedModule} from 'src/app/shared/shared.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DateInputsModule} from "@progress/kendo-angular-dateinputs";
import {LabelModule} from "@progress/kendo-angular-label";
import {InputsModule} from "@progress/kendo-angular-inputs";
import {LayoutModule} from "@progress/kendo-angular-layout";
import {ButtonsModule} from "@progress/kendo-angular-buttons";
import {MenusModule} from "@progress/kendo-angular-menu";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {DialogModule, WindowModule} from "@progress/kendo-angular-dialog";
import {HttpClientModule} from "@angular/common/http";
import {GridModule} from "@progress/kendo-angular-grid";
import {UploadsModule} from "@progress/kendo-angular-upload";
import { IntlModule } from "@progress/kendo-angular-intl";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { DataPegawaiComponent } from './pages/profile-informasi-perusahaan/data-pegawai/data-pegawai.component';
import { IndicatorsModule } from "@progress/kendo-angular-indicators";
import { PemegangSahamComponent } from './pages/profile-tata-kelola-perusahaan/pemegang-saham/pemegang-saham.component';
import { ProfilKaryawanComponent } from './pages/profile-tata-kelola-perusahaan/profil-karyawan/profil-karyawan.component';
import { ProfilPimpinanDanPengurusComponent } from './pages/profile-tata-kelola-perusahaan/profil-pimpinan-dan-pengurus/profil-pimpinan-dan-pengurus.component';
import { ProfileAspekLegalComponent } from './pages/profile-aspek-legal/profile-aspek-legal.component';
import { LegalitasComponent } from './pages/profile-aspek-legal/sections/legalitas/legalitas.component';
import { DokumenLegalComponent } from './pages/profile-aspek-legal/sections/dokumen-legal/dokumen-legal.component';
import { SertifikasiDokKhususComponent } from './pages/profile-aspek-legal/sections/sertifikasi-dok-khusus/sertifikasi-dok-khusus.component';
import { ProfileUbahSandiComponent } from './pages/profile-ubah-sandi/profile-ubah-sandi.component';
// const drawerRoutes = [
//   { path: 'dashboard', component: ProfileDashboardComponent, text: 'Dashboard'},
//   { title: "Kelola Akun",
//     selected: false,
//     expanded: true,
//     parent: true,
//     children: [
//       {
//         path: 'profile-information',
//         component: ProfileInformasiPerusahaanComponent,
//         text: 'Informasi Perusahaan'
//       }
//     ]
//   }
// ];

@NgModule({
  declarations: [
    SidebarComponent,
    ProfileMenuComponent,
    ProfileVerifikasiKelengkapanComponent,
    ProfileInformasiPerusahaanComponent,
    ProfilePersonInChargeComponent,
    ProfileAsetComponent,
    ProfileDokumenComponent,
    ProfileRiwayatPekerjaanComponent,
    ProfileAlamatComponent,
    ProfileLaporanKeuanganComponent,
    ProfileDashboardComponent,
    PemegangSahamComponent,
    DrawerComponent,
    DataPegawaiComponent,
    ProfileTataKelolaPerusahaanComponent,
    ProfileUbahSandiComponent,
    PemegangSahamComponent,
    ProfilKaryawanComponent,
    DrawerComponent,
    ProfilPimpinanDanPengurusComponent,
    ProfileAspekLegalComponent,
    LegalitasComponent,
    DokumenLegalComponent,
    SertifikasiDokKhususComponent,
    ProfileUbahSandiComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    LayoutModule,
    LabelModule,
    ButtonsModule,
    MenusModule,
    DropDownsModule,
    DialogModule,
    HttpClientModule,
    GridModule,
    InputsModule,
    UploadsModule,
    IntlModule,
    WindowModule,
    IndicatorsModule
    // RouterModule.forRoot(drawerRoutes)
  ],
  // providers: [
  //   {
  //     provide: APP_BASE_HREF,
  //     useValue: window.location.pathname
  //   }
  // ],
})
export class ProfileModule {
}
