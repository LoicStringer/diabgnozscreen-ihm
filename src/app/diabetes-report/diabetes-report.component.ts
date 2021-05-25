import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Report } from '../models/report.model';
import { DiabetesReportService } from '../services/diabetes-report.service';

@Component({
	selector: 'app-diabetes-report',
	templateUrl: './diabetes-report.component.html',
	styleUrls: ['./diabetes-report.component.scss']
})
export class DiabetesReportComponent implements OnInit {

	report!: Report;
	reportSubscription!: Subscription;
	patientId = this.route.snapshot.paramMap.get('patientId');

	constructor(private route: ActivatedRoute,
		private diabetesReportService: DiabetesReportService) { }

	ngOnInit(): void {
		this.getDiabetesReport(+this.patientId!)
	}

	getDiabetesReport(patientId: number) {
		this.diabetesReportService.getDiabetesReport(patientId);
		this.reportSubscription = this.diabetesReportService.reportSubject.subscribe(
			(report: Report) => {
				this.report = report;
			}
		);
		this.diabetesReportService.emitReportSubject();
	}

}
