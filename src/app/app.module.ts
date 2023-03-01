import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainmenuComponent } from './components/header/mainmenu/mainmenu.component';
import { CarouselComponent } from './components/header/carousel/carousel.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomepagemenuComponent } from './components/homepage/homepagemenu/homepagemenu.component';
import { NewestVirtualworldsComponent } from './components/virtualworlds/newest-virtualworlds/newest-virtualworlds.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    CarouselComponent,
    HomepageComponent,
    HomepagemenuComponent,
    NewestVirtualworldsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
