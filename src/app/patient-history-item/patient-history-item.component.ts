import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note.model';

@Component({
	selector: 'app-patient-history-item',
	templateUrl: './patient-history-item.component.html',
	styleUrls: ['./patient-history-item.component.scss']
})
export class PatientHistoryItemComponent implements OnInit {

	@Input() note!: Note;
	isEditable: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	onEdit() {

	}

}
