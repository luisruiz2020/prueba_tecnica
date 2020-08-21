import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageDoctorComponent } from './components/manage-doctor/manage-doctor.component';
import { ManagePatientComponent } from './components/manage-patient/manage-patient.component';

const routes: Routes = [
  { path: 'manageDoctor', component: ManageDoctorComponent },
  { path: 'managePatient', component: ManagePatientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
