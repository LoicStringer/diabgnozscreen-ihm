import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Note } from "../models/note.model";
import { Page } from "../pagination/page";
import { Pageable } from "../pagination/pageable";

@Injectable()
export class PatientHistoryService {

	notesPageSubject: Subject<Page<Note>> = new Subject<Page<Note>>();
	noteSubject: Subject<Note> = new Subject<Note>();
	notesPage: Page<Note> = new Page<Note>();
	note: Note = new Note();
	apiUrl = 'http://localhost:8082/diabgnoz/patient-history/';

	constructor(private httpClient: HttpClient) { }

	emitNotesPageSubject() {
		this.notesPageSubject.next(this.notesPage);
	}

	emitNoteSubject() {
		this.noteSubject.next(this.note);
	}

	buildUrlPaginationOptions(pageable: Pageable): string {
		const paginationOptions =
			'?page=' + pageable.pageNumber
			+ '&size=' + pageable.pageSize
			+ '&sort=noteDate';
		return paginationOptions;
	}

	getPatientHistory(patientId: number, pageable: Pageable) {
		this.httpClient
			.get<Page<Note>>(this.apiUrl + patientId + this.buildUrlPaginationOptions(pageable))
			.subscribe(
				(response) => {
					this.notesPage = response;
					this.emitNotesPageSubject();
					console.log(response);
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}
	
	addNote(noteToAdd: Note){
		this.httpClient
			.post<Note>(this.apiUrl, noteToAdd)
			.subscribe(
				(response) => {
					this.note = response;
					this.emitNoteSubject();
					console.log(response);
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}

	updatePatientHistoryNote(updatedNote: Note) {
		this.httpClient
			.put<Note>(this.apiUrl, updatedNote)
			.subscribe(
				(response) => {
					this.note = response;
					this.emitNoteSubject();
					console.log(response);
				},
				(error) => {
					console.log('Erreur de chargement ! ' + error);
				}
			);
	}
}