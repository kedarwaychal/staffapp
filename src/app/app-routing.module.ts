import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardstaffComponent } from './dashboardstaff/dashboardstaff.component';

const routes: Routes = [
  { path : 'register' , component : RegistrationComponent},
  { path : 'signIn',   component : SignInComponent},
  { path : '',   component : SignInComponent},
  { path : 'dash',    component : DashboardComponent},
  { path : 'staff',   component : DashboardstaffComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
