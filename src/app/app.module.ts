import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/template/navbar/navbar.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { LandingComponent } from './components/template/landing/landing.component';
import { MenuComponent } from './components/pages/menu/menu.component';
import { MainComponent } from './components/pages/main/main.component';
import { FotogalerieComponent } from './components/pages/fotogalerie/fotogalerie.component';
import { UbytovaniComponent } from './components/pages/ubytovani/ubytovani.component';
import { SliderComponent } from './components/pages/ubytovani/slider/slider.component';
import { CenikComponent } from './components/pages/ubytovani/cenik/cenik.component';
import { KontaktComponent } from './components/pages/kontakt/kontakt.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LandingComponent,
    FotogalerieComponent,
    MainComponent,
    MenuComponent,
    UbytovaniComponent,
    SliderComponent,
    CenikComponent,
    KontaktComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
