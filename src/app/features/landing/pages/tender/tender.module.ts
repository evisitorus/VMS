import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ListViewModule } from '@progress/kendo-angular-listview';
import { GridModule } from '@progress/kendo-angular-grid';  

import { DateInputsModule } from "@progress/kendo-angular-dateinputs";
import { LabelModule } from "@progress/kendo-angular-label";
import { InputsModule } from "@progress/kendo-angular-inputs";
import { LayoutModule } from "@progress/kendo-angular-layout";
import { ButtonsModule } from "@progress/kendo-angular-buttons";

import { ListTenderComponent } from './list-tender/list-tender.component';
import { CardTenderComponent } from './card-tender/card-tender.component';
import { TenderDataComponent } from "./tender-data/tender-data.component";

import { ProductsService } from "./card-tender/product.service";

@NgModule({
  declarations: [
    ListTenderComponent,
    CardTenderComponent,
    TenderDataComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DateInputsModule,
    InputsModule,
    LayoutModule,
    LabelModule,
    ButtonsModule,
    ListViewModule,
    GridModule,  
  ],
  exports: [
    ListTenderComponent,
    CardTenderComponent,
    TenderDataComponent
  ],
  providers: [
    ProductsService
  ],
})
export class TenderModule { }
