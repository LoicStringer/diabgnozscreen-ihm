import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Report } from "../models/report.model";

@Injectable()
export class DiabetesReportService {
	
	reportSubject: Subject<Report> = new Subject<Report>();
	report:Report = new Report();
	apiUrl = 'http://localhost:8080/diabgnoz/report/patients/';
	
	constructor(private httpClient: HttpClient) { }
	
	emitReportSubject() {
		this.reportSubject.next(this.report);
	}
	
		getDiabetesReport(patientId: number) {
		const options = {headers: new HttpHeaders({
			'Accept-Language':'en-US'
		})
		};
		const url = this.apiUrl +  patientId;
		this.httpClient
			.get<Report>(url,options)
			.subscribe(
				(response) => {
					this.report = response;
					this.emitReportSubject();
				}
			);
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}