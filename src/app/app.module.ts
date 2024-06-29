import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { HttpHandlerService } from './shared/http-handler.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardstaffComponent } from './dashboardstaff/dashboardstaff.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog'
import { leaveService } from './shared/leave.service';
import { DashboardCardComponent } from './dashboard/dashboard-card/dashboard-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegistrationComponent,
    HeaderComponent,
    DashboardComponent,
    DashboardstaffComponent,
    LeaveFormComponent,
    DashboardCardComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule

  ],
  providers: [
    HttpHandlerService,
    leaveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
