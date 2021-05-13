import { Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Note } from '../models/note.model';
import { Patient } from '../models/patient.model';
import { Page } from '../pagination/page';
import { PaginationService } from '../services/pagination.service';
import { PatientHistoryService } from '../services/patient-history.service';

@Component({
	selector: 'app-single-patient-history',
	templateUrl: './single-patient-history.component.html',
	styleUrls: ['./single-patient-history.component.scss']
})
export class SinglePatientHistoryComponent implements OnInit {

	@Input() patient!: Patient;
	notesPage: Page<Note> = new Page<Note>();
	notePageSusbscription!: Subscription;
	note!: Note;
	noteContent!: string;
	isAddingNote: boolean = false;
	patientId = this.route.snapshot.paramMap.get('patientId');

	constructor(private patientHistoryService: PatientHistoryService,
		private paginationService: PaginationService,
		private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.getPatientHistory(+this.patientId!);
	}

	ngOndestroy(): void {
		this.notePageSusbscription.unsubscribe();
	}

	getPatientHistory(patientId: number) {
		this.patientHistoryService.getPatientHistory(patientId, this.notesPage.pageable);
		this.notePageSusbscription = this.patientHistoryService.notesPageSubject.subscribe(
			(notesPage: Page<Note>) => {
				this.notesPage = notesPage;
			}
		);
		this.patientHistoryService.emitNotesPageSubject();
	}

	public getNextPage(): void {
		this.notesPage.pageable = this.paginationService.getNextPage(this.notesPage);
		this.getPatientHistory(+this.patientId!);
	}

	public getPreviousPage(): void {
		this.notesPage.pageable = this.paginationService.getPreviousPage(this.notesPage);
		this.getPatientHistory(+this.patientId!);
	}

	onUpdateNote() {
		this.getPatientHistory(+this.patientId!);
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

	onSaveNote() {
		const noteToAdd = new Note();
		noteToAdd.noteContent = this.noteContent;
		noteToAdd.patientLastName = this.patient.patientLastName;
		noteToAdd.patientId = +this.patientId!;
		this.patientHistoryService.addNote(noteToAdd);
		this.onCancelAddNote();
		this.getPatientHistory(+this.patientId!);
	}
}
