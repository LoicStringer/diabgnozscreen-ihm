export class Patient {

	constructor(
		public patientId?: number,
		public patientLastName?: string,
		public patientFirstName?: string,
		public patientBirthDate?: Date,
		public patientGender?: string,
		public patientAddress?: string,
		public patientPhoneNumber?: string,
		public patientEmail?: string
	) {}
}