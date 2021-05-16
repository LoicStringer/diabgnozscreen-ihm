

export class Note {

	public noteId?: string;
	public patientId?: number;
	public patientLastName?: string;
	public noteContent?: string;
	public createdDate?: Date;
	public lastModifiedDate?: Date;

	constructor(
		init?: Partial<Note>
	) {
		Object.assign(this, init)
	}

}