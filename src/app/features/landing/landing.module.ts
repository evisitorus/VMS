import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule, CardModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { ListViewModule } from '@progress/kendo-angular-listview';

import {SharedModule} from 'src/app/shared/shared.module';
import {MenusModule} from "@progress/kendo-angular-menu";
import {DropDownsModule} from "@progress/kendo-angular-dropdowns";
import {DialogModule, WindowModule} from "@progress/kendo-angular-dialog";
import {HttpClientModule} from "@angular/common/http";
import {GridModule} from "@progress/kendo-angular-grid";
import {UploadsModule} from "@progress/kendo-angular-upload";
import { IntlModule } from "@progress/kendo-angular-intl";


import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListTenderComponent } from './pages/tender/list-tender/list-tender.component';
import { CardTenderComponent } from './pages/tender/card-tender/card-tender.component';
import { TenderDataComponent } from './pages/tender/tender-data/tender-data.component'
import { GridBannerComponent } from './pages/grid-banner/grid-banner.component';


import { ProductsService } from "./pages/tender/card-tender/product.service";

@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    ListTenderComponent,
    CardTenderComponent,
    TenderDataComponent,
    GridBannerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ListViewModule,
    CardModule,

    LandingRoutingModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    LayoutModule,
    LabelModule,
    ButtonsModule,

    CommonModule,
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
    WindowModule
  ],
  exports: [
    LandingPageComponent,
    ListTenderComponent,
    TenderDataComponent
  ],
  providers: [
    ProductsService
  ],
})
export class LandingModule { }
