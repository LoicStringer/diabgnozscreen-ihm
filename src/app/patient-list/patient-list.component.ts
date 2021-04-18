import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Patient } from '../models/patient.model';
import { Page } from '../pagination/page';
import { Pageable } from '../pagination/pageable';
import { PaginationService } from '../services/pagination.service';
import { PatientService } from '../services/patient.service';

@Component({
	selector: 'app-patient-list',
	templateUrl: './patient-list.component.html',
	styleUrls: ['./patient-list.component.scss']
})
export class PatientListComponent implements OnInit {

	patientsPage!: Page<Patient>;
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


	getPatientsList() {
		return this.patientsPage.content;
	}

	private getPatientsData(): void {
		this.patientService.getPatientsPage(new Pageable);
		this.patientPageSuscription = this.patientService.patientPageSubject.subscribe(
			(patientsPage: Page<Patient>) => {
				this.patientsPage = patientsPage;
			}
		);
		this.patientService.emitPatientPageSubject();
	}

	public getNextPage(): void {
		this.patientsPage.pageable = this.paginationService.getNextPage(this.patientsPage);

	}

	public getPreviousPage(): void {
		this.patientsPage.pageable = this.paginationService.getPreviousPage(this.patientsPage);

	}

	trackByPatientId(index: number, patient: Patient) {
		return patient.patientId;
	}

}
