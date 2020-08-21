import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagePatientComponent } from './components/manage-patient/manage-patient.component';
import { ManageDoctorComponent } from './components/manage-doctor/manage-doctor.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { SearchPatientComponent } from './components/search-patient/search-patient.component';
import { CreateDoctorComponent } from './components/create-doctor/create-doctor.component';
import { SearchDoctorComponent } from './components/search-doctor/search-doctor.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagePatientComponent,
    ManageDoctorComponent,
    CreateUserComponent,
    SearchPatientComponent,
    CreateDoctorComponent,
    SearchDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
