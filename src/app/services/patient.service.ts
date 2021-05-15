import { Injectable } from "@angular/core";
import { Patient } from "../models/patient.model";
import { Page } from "../pagination/page";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Pageable } from "../pagination/pageable";

@Injectable()
export class PatientService {

	patientPageSubject: Subject<Page<Patient>> = new Subject<Page<Patient>>();
	patientSubject: Subject<Patient> = new Subject<Patient>();
	patientsPage: Page<Patient> = new Page<Patient>();
	patient: Patient = new Patient();
	apiUrl = 'http://localhost:8081/diabgnoz/patients';

	constructor(private httpClient: HttpClient) { }

	emitPatientPageSubject() {
		this.patientPageSubject.next(this.patientsPage);
	}

	emitPatientSubject() {
		this.patientSubject.next(this.patient);
	}

	buildUrlPaginationOptions(pageable: Pageable): string {
		const paginationOptions =
			'&page=' + pageable.pageNumber
			+ '&size=' + pageable.pageSize
			+ '&sort=patientLastName';
		return paginationOptions;
	}

	getPatientsPage(patientLastName: any, pageable: Pageable) {
		let url = this.apiUrl + "?patientLastName" + this.buildUrlPaginationOptions(pageable);
		if (patientLastName != undefined) {
			url = this.apiUrl + "?patientLastName=" + patientLastName + this.buildUrlPaginationOptions(pageable);
		}
		this.httpClient
			.get<Page<Patient>>(url)
			.subscribe(
				(response) => {
					this.patientsPage = response;
					this.emitPatientPageSubject();
				}
			);
	}

	getPatientById(patientId: number) {
		const url = this.apiUrl + '/' + patientId;
		this.httpClient
			.get<Patient>(url)
			.subscribe(
				(response) => {
					this.patient = response;
					this.emitPatientSubject();
				}
			);
	}

	addNewPatient(patientToAdd: Patient) {
		this.httpClient
			.post<Patient>(this.apiUrl, patientToAdd)
			.subscribe(
				(response) => {
					this.patient = response;
					this.emitPatientSubject();
				}
			);
	}

	updatePatient(patientId: number, patientToUpdate: Patient) {
		const url = this.apiUrl + '/' + patientId;
		this.httpClient
			.put<Patient>(url, patientToUpdate)
			.subscribe(
				(response) => {
					this.patient = response;
					this.emitPatientSubject();
				}
			);
	}

}