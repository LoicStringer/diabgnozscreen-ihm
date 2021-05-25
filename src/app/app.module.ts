import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationService } from './services/pagination.service';
import { PaginationToolComponent } from './pagination-tool/pagination-tool.component';
import { PatientItemComponent } from './patient-item/patient-item.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from './services/patient.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SinglePatientViewComponent } from './single-patient-view/single-patient-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewPatientViewComponent } from './new-patient-view/new-patient-view.component';
import { SinglePatientHistoryComponent } from './single-patient-history/single-patient-history.component';
import { PatientHistoryService } from './services/patient-history.service';
import { PatientHistoryItemComponent } from './patient-history-item/patient-history-item.component';
import { HttpErrorInterceptorService } from './services/http-interceptor.service';
import { DiabetesReportComponent } from './diabetes-report/diabetes-report.component';
import { DiabetesReportService } from './services/diabetes-report.service';


@NgModule({
  declarations: [
    AppComponent,
    PaginationToolComponent,
    PatientItemComponent,
    PatientListComponent,
    SinglePatientViewComponent,
    NewPatientViewComponent,
    SinglePatientHistoryComponent,
    PatientHistoryItemComponent,
    DiabetesReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	HttpClientModule,
	FormsModule,
	ReactiveFormsModule
  ],
  providers: [
	{
		provide: HTTP_INTERCEPTORS,
		useClass: HttpErrorInterceptorService,
		multi: true
	},
	PaginationService,
	PatientService,
	PatientHistoryService,
	DiabetesReportService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
