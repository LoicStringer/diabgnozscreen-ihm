export class Patient {

	constructor(
		public patientId: number,
		public patientLastName: string,
		public patientFirstName: string,
		public patientbirthDate: Date,
		public petientSex: string,
		public patientAddress: string,
		public patientPhoneNumber: string,
		public patientEmail: string
	) {}
}