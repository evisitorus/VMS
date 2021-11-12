import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ListTenderComponent } from './pages/list-tender/list-tender.component';


@NgModule({
  declarations: [
    LandingPageComponent,
    CarouselComponent,
    ListTenderComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ],
  exports: [
    LandingPageComponent,
  ]
})
export class LandingModule { }
