import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Patient } from '../models/patient.model';

import { PatientService } from '../services/patient.service';


@Component({
	selector: 'app-single-patient-view',
	templateUrl: './single-patient-view.component.html',
	styleUrls: ['./single-patient-view.component.scss']
})
export class SinglePatientViewComponent implements OnInit {

	patient!: Patient;
	patientSuscription!: Subscription;
	isEditable!: boolean;
	

	constructor(private route: ActivatedRoute,
		private patientService: PatientService,
		private router: Router) { }

	ngOnInit() {
		const patientId = this.route.snapshot.paramMap.get('patientId');
		this.getPatientData(+patientId!);
	}

	ngOnDestroy() {
		this.patientSuscription.unsubscribe();
	}

	getPatientData(patientId: number) {
		this.patientService.getPatientById(patientId);
		this.patientSuscription = this.patientService.patientSubject.subscribe(
			(patient: Patient) => {
				this.patient = patient;
			}
		);
		this.patientService.emitPatientSubject();
	}

	onSubmitForm(form: NgForm) {
		const patientId = this.route.snapshot.paramMap.get('patientId');
		this.patient.patientLastName = form.value['patientLastName'];
		this.patient.patientFirstName = form.value['patientFirstName'];
		this.patient.patientBirthDate = form.value['patientBirthDate'];
		this.patient.patientGender = form.value['patientGender'];
		this.patient.patientAddress = form.value['patientAddress'];
		this.patient.patientPhoneNumber = form.value['patientPhoneNumber'];
		this.patient.patientEmail = form.value['patientEmail'];
		this.patientService.updatePatient(+patientId!, this.patient);
		this.ngOnInit();
		this.router.navigate(['patients/details/' + patientId]);
		this.isEditable = false;
	}

	onEdit() {
		this.isEditable = true;
	}

	onCancelEdit() {
		this.ngOnInit();
		this.isEditable = false;
	}
}