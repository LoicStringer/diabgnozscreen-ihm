import { Injectable } from "@angular/core";
import { Patient } from "../models/patient.model";
import { Page } from "../pagination/page";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from "rxjs";
import { Pageable } from "../pagination/pageable";

@Injectable()
export class PatientService {

	patientPageSubject: Subject<Page<Patient>> = new Subject<Page<Patient>>();
	patientSubject: Subject<Patient> = new Subject<Patient>();
	patientsPage: Page<Patient> = new Page<Patient>();
	patient: Patient = new Patient();
	apiUrl = 'http://localhost:8081/diabgnoz/patients/';

	constructor(private httpClient: HttpClient) { }

	emitPatientPageSubject() {
		this.patientPageSubject.next(this.patientsPage);
	}

	emitPatientSubject() {
		this.patientSubject.next(this.patient);
	}

	buildUrlPaginationOptions(pageable: Pageable): string {
		const paginationOptions =
			'?page=' + pageable.pageNumber
			+ '&size=' + pageable.pageSize
			+ '&sort=patientLastName';
		return paginationOptions;
	}

	getPatientsPage(pageable: Pageable) {
		this.httpClient
			.get<Page<Patient>>(this.apiUrl + this.buildUrlPaginationOptions(pageable))
			.subscribe(
				(response) => {
					this.patientsPage = response;
					this.emitPatientPageSubject();
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}

	getPatientsPageByLastName(patientLastName: string, pageable: Pageable) {
		const params = new HttpParams().set('patientLastName',patientLastName);
		this.httpClient
			.get<Page<Patient>>(this.apiUrl + this.buildUrlPaginationOptions(pageable),{params:params})
			.subscribe(
				(response) => {
					this.patientsPage = response;
					this.emitPatientPageSubject();
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}

	getPatientById(patientId: number) {
		const url = this.apiUrl + patientId;
		this.httpClient
			.get<Patient>(url)
			.subscribe(
				(response) => {
					this.patient = response;
					this.emitPatientSubject();
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
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
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}

	updatePatient(patientId: number, patientToUpdate: Patient) {
		const url = this.apiUrl + patientId;
		this.httpClient
			.put<Patient>(url, patientToUpdate)
			.subscribe(
				(response) => {
					this.patient = response;
					this.emitPatientSubject();
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}


}