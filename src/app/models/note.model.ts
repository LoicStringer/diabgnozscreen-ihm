import ObjectID from "bson-objectid";

export class Note {
	
	public noteId?:ObjectID;
	public patientId?: number;
	public patientLastName?: string;
	public noteContent?: string;
	public createdDate?: Date;
	public lastMofiedDate?: Date;
	
	constructor(
		init?: Partial<Note>
	) { 
		Object.assign(this,init)
	}
}