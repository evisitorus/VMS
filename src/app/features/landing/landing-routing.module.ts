import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { TenderInfoComponent } from './pages/tender-info/tender-info.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'tender/detail/:id', component: TenderInfoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
