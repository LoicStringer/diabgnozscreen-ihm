import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
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
	patientSubscription!: Subscription;
	isEditable!: boolean;
	isAddingNote!: boolean;
	noteContent!: string;
	patientId = this.route.snapshot.paramMap.get('patientId');


	constructor(private route: ActivatedRoute,
		private patientService: PatientService,
	) { }

	ngOnInit() {
		this.getPatientData(+this.patientId!);
	}

	ngOnDestroy() {
		this.patientSubscription.unsubscribe();
	}

	getPatientData(patientId: number) {
		this.patientService.getPatientById(patientId);
		this.patientSubscription = this.patientService.patientSubject.subscribe(
			(patient: Patient) => {
				this.patient = patient;
			}
		);
		this.patientService.emitPatientSubject();
	}

	onSubmitPatientForm(form: NgForm) {
		this.patient.patientLastName = form.value['patientLastName'];
		this.patient.patientFirstName = form.value['patientFirstName'];
		this.patient.patientBirthDate = form.value['patientBirthDate'];
		this.patient.patientGender = form.value['patientGender'];
		this.patient.patientAddress = form.value['patientAddress'];
		this.patient.patientPhoneNumber = form.value['patientPhoneNumber'];
		this.patient.patientEmail = form.value['patientEmail'];
		this.patientService.updatePatient(+this.patientId!, this.patient);
		this.isEditable = false;
	}

	onAddNote() {
		this.isAddingNote = true;
	}

	onClearNote() {
		this.noteContent = '';
	}

	onCancelAddNote() {
		this.onClearNote();
		this.isAddingNote = false;
	}

	onEdit() {
		this.isEditable = true;
	}

	onCancelEdit(form:NgForm) {
		form.reset();
		this.isEditable = false;
		this.getPatientData(+this.patientId!);
	}


}