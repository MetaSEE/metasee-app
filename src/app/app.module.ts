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
import { ThumbVirtualworldComponent } from './components/virtualworlds/thumb-virtualworld/thumb-virtualworld.component';
import { CreateVirtualworldComponent } from './components/virtualworlds/create-virtualworld/create-virtualworld.component';
import { ThumbEnvironmentComponent } from './components/virtualworlds/create-virtualworld/thumb-environment/thumb-environment.component';
import { LoginComponent } from './components/login/login.component';
import { SearchVirtualworldComponent } from './components/virtualworlds/search-virtualworld/search-virtualworld.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainmenuComponent,
    CarouselComponent,
    HomepageComponent,
    HomepagemenuComponent,
    NewestVirtualworldsComponent,
    FooterComponent,
    ThumbVirtualworldComponent,
    CreateVirtualworldComponent,
    ThumbEnvironmentComponent,
    LoginComponent,
    SearchVirtualworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
