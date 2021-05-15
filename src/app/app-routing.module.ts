import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPatientViewComponent } from './new-patient-view/new-patient-view.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SinglePatientViewComponent } from './single-patient-view/single-patient-view.component';

const routes: Routes = [
	{ path: 'patients', component: PatientListComponent },
	{ path: 'patients/details/:patientId', component: SinglePatientViewComponent},
	{ path: 'new-patient' , component: NewPatientViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
