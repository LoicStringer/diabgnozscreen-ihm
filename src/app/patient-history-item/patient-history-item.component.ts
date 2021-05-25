import { Component, Input, OnInit, Output } from '@angular/core';
import { Note } from '../models/note.model';
import { PatientHistoryService } from '../services/patient-history.service';

@Component({
	selector: 'app-patient-history-item',
	templateUrl: './patient-history-item.component.html',
	styleUrls: ['./patient-history-item.component.scss']
})
export class PatientHistoryItemComponent implements OnInit {

	@Input() note!: Note;
	noteContentCopy!: string;
	isEditable: boolean = false;

	constructor(
		private patientHistoryService: PatientHistoryService
	) { }

	ngOnInit(): void {

	}

	onUpdateNote() {
		this.note.noteContent = this.noteContentCopy;
		this.patientHistoryService.updatePatientHistoryNote(this.note);
		this.isEditable = false;
	}

	onEdit() {
		this.noteContentCopy = this.note.noteContent!;
		this.isEditable = true;
	}

	onCancelEdit() {
		this.noteContentCopy = Object.assign({}, this.note.noteContent);
		this.isEditable = false;
	}
	
}
