export class Patient {

	public patientId?: number;
	public patientLastName?: string;
	public patientFirstName?: string;
	public patientBirthDate?: Date;
	public patientGender?: string;
	public patientAddress?: string;
	public patientPhoneNumber?: string;
	public patientEmail?: string;


	constructor(
		init?: Partial<Patient>
	) { 
		Object.assign(this,init)
	}
}