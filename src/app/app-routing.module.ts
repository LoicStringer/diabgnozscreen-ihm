import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { SinglePatientViewComponent } from './single-patient-view/single-patient-view.component';

const routes: Routes = [
	{ path: 'patients', component: PatientListComponent },
	{ path: 'patients/details/:patientId', component: SinglePatientViewComponent}
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
