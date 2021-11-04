import {ProfileMenuComponent} from './pages/profile-menu/profile-menu.component';
import {ProfileVerifikasiKelengkapanComponent} from './pages/profile-verifikasi-kelengkapan/profile-verifikasi-kelengkapan.component';
import {ProfileInformasiPerusahaanComponent} from './pages/profile-informasi-perusahaan/profile-informasi-perusahaan.component';
import {ProfilePersonInChargeComponent} from "./pages/profile-person-in-charge/profile-person-in-charge.component";
import {ProfileAsetComponent} from "./pages/profile-aset/profile-aset.component";
import {ProfileDokumenComponent} from "./pages/profile-dokumen/profile-dokumen.component";
import {ProfileRiwayatPekerjaanComponent} from "./pages/profile-riwayat-pekerjaan/profile-riwayat-pekerjaan.component";
import {ProfileAlamatComponent} from "./pages/profile-alamat/profile-alamat.component";
import {ProfileLaporanKeuanganComponent} from "./pages/profile-laporan-keuangan/profile-laporan-keuangan.component";

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
import {DialogModule} from "@progress/kendo-angular-dialog";
import {HttpClientModule} from "@angular/common/http";
import {GridModule} from "@progress/kendo-angular-grid";
import {UploadsModule} from "@progress/kendo-angular-upload";
import { IntlModule } from "@progress/kendo-angular-intl";

@NgModule({
  declarations: [
    ProfileMenuComponent,
    ProfileVerifikasiKelengkapanComponent,
    ProfileInformasiPerusahaanComponent,
    ProfilePersonInChargeComponent,
    ProfileAsetComponent,
    ProfileDokumenComponent,
    ProfileRiwayatPekerjaanComponent,
    ProfileAlamatComponent,
    ProfileLaporanKeuanganComponent,
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
    IntlModule
  ]
})
export class ProfileModule {
}
