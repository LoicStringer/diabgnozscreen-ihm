import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from '../models/patient.model';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-new-patient-view',
  templateUrl: './new-patient-view.component.html',
  styleUrls: ['./new-patient-view.component.scss']
})
export class NewPatientViewComponent implements OnInit {

	patientForm!: FormGroup ;
	newPatient!: Patient;
	isSubmitted: boolean = false;

  constructor(private patientService: PatientService,
			  private router: Router,
			  private formBuilder: FormBuilder) { }

  ngOnInit(): void {
	this.initForm();
  }

	initForm(){
		this.patientForm = this.formBuilder.group({
			patientLastName:[null, Validators.required],
			patientFirstName:[null, Validators.required],
			patientBirthDate:[null, Validators.required],
			patientGender:[null, Validators.required],
			patientAddress:[null],
			patientPhoneNumber:[null],
			patientEmail:[null, Validators.email]
		})
	}
	
	onSubmitForm(){
		this.newPatient = new Patient (this.patientForm.value);
		this.patientService.addNewPatient(this.newPatient);
		this.isSubmitted = true;
	}
	
	onClearForm(){
		this.patientForm.clearValidators();
	}
	
	onCancel(){
		this.patientForm.reset();
		this.patientForm.clearValidators();
		this.router.navigate(['']);
	}
	
}
