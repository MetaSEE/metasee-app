import { CreateVirtualworldComponent } from './components/virtualworlds/create-virtualworld/create-virtualworld.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewestVirtualworldsComponent } from './components/virtualworlds/newest-virtualworlds/newest-virtualworlds.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { SearchVirtualworldComponent } from './components/virtualworlds/search-virtualworld/search-virtualworld.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomepageComponent
  },
  {
    path: 'newest',
    component: NewestVirtualworldsComponent
  },
  {
    path: 'create',
    component: CreateVirtualworldComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'search',
    component: SearchVirtualworldComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
