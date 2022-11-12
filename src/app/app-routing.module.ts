import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutsComponent } from './abouts/abouts.component';
import { AuthModule } from './auth/auth.module';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'about',
    component:AboutsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'security',
    loadChildren:()=>AuthModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
