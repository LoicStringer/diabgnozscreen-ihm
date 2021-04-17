import { Injectable } from "@angular/core";
import { Patient } from "../models/patient.model";
import { Page } from "../pagination/page";
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Pageable } from "../pagination/pageable";

@Injectable()
export class PatientService {

	patientPageSubject: Subject<Page<Patient>> = new Subject<Page<Patient>>();
	patientsPage: Page<Patient> = new Page<Patient>();

	constructor(private httpClient: HttpClient) { }

	emitPatientPageSubject() {
		this.patientPageSubject.next(this.patientsPage);
	}

	buildUrl(pageable: Pageable): string {
		const apiUrl = 'http://localhost:8081/diabgnoz/patients';
		const paginationOptions = '?page=' + pageable.pageNumber
			+ '&size=' + pageable.pageSize
			+ '&sort=';
		const patientsUrl = apiUrl + paginationOptions;
		return patientsUrl;
	}

	getPatientsPage(pageable: Pageable) {
		this.httpClient
			.get<Page<Patient>>(this.buildUrl(pageable))
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
	

}