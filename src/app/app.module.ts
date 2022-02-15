import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MainComponent } from './layouts/main/main.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AuthModule } from './features/auth/auth.module';
import { ProfileModule } from './features/profile/profile.module';
import { LandingModule } from './features/landing/landing.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ListViewModule } from '@progress/kendo-angular-listview';
import { IconsModule } from '@progress/kendo-angular-icons';
import { TentangKamiComponent } from './layouts/tentang-kami/tentang-kami.component';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomHttpInterceptor } from './layouts/vms-loader/http-interceptor';
import { VmsLoader } from './layouts/vms-loader/vms-loader.component';






@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavbarComponent,
    TentangKamiComponent,
    VmsLoader
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    // Developed Modules
    AuthModule,
    ProfileModule,
    LandingModule,

    CoreModule,
    SharedModule,

    AppRoutingModule,
    LayoutModule,
    ListViewModule,
    IconsModule,
    IndicatorsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
