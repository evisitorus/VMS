import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PopupMessageComponent } from './components/popup-message/popup-message.component';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@NgModule({
  declarations: [
    NotFoundComponent,
    PopupMessageComponent
  ],
  imports: [
    CommonModule,
    InputsModule,
    ButtonsModule,
    LayoutModule,
    LabelModule,
    DateInputsModule,
    DialogsModule
  ],
  exports: [
    NotFoundComponent,
    PopupMessageComponent
  ]
})
export class SharedModule { }
