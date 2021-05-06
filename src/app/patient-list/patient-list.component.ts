import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from '../models/patient.model';
import { Page } from '../pagination/page';
import { PaginationService } from '../services/pagination.service';
import { PatientService } from '../services/patient.service';

@Component({
	selector: 'app-patient-list',
	templateUrl: './patient-list.component.html',
	styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

	patientsPage: Page<Patient> = new Page<Patient>();
	patientPageSuscription!: Subscription;

	constructor(
		private patientService: PatientService,
		private paginationService: PaginationService
	) { }

	ngOnInit(): void {
		this.getPatientsData();
	}

	ngOnDestroy() {
		this.patientPageSuscription.unsubscribe();
	}

	onSearch(patientLastName:string){
		this.patientService.getPatientsPageByLastName(patientLastName,this.patientsPage.pageable);
		this.patientPageSuscription = this.patientService.patientPageSubject.subscribe(
			(patientsPage: Page<Patient>) => {
				this.patientsPage = patientsPage;
			}
		);
		this.patientService.emitPatientPageSubject();
	}

	public getNextPage(): void {
		this.patientsPage.pageable = this.paginationService.getNextPage(this.patientsPage);
		this.getPatientsData();
	}

	public getPreviousPage(): void {
		this.patientsPage.pageable = this.paginationService.getPreviousPage(this.patientsPage);
		this.getPatientsData();
	}

	private getPatientsData(): void {
		this.patientService.getPatientsPage(this.patientsPage.pageable);
		this.patientPageSuscription = this.patientService.patientPageSubject.subscribe(
			(patientsPage: Page<Patient>) => {
				this.patientsPage = patientsPage;
			}
		);
		this.patientService.emitPatientPageSubject();
	}


}
