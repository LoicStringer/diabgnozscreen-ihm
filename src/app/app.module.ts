import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationService } from './services/pagination.service';
import { PaginationToolComponent } from './pagination-tool/pagination-tool.component';
import { PatientItemComponent } from './patient-item/patient-item.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientService } from './services/patient.service';

@NgModule({
  declarations: [
    AppComponent,
    PaginationToolComponent,
    PatientItemComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
	PaginationService,
	PatientService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
