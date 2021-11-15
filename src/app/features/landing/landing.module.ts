import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TenderInfoComponent } from './pages/tender-info/tender-info.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';

import localeId from '@angular/common/locales/id'; 
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeId, 'id'); 

@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    TenderInfoComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    LandingRoutingModule
  ],
  exports: [
    LandingPageComponent,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "id-ID" }]
})
export class LandingModule { }
