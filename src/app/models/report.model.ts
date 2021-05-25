export class Report {

	public patientLastName?: string;
	public patientFirstName?: string;
	public patientAge?: number;
	public reportSpeech?: string;
	public riskResult?: string;

	constructor(
		init?: Partial<Report>
	) {
		Object.assign(this, init)
	}
}