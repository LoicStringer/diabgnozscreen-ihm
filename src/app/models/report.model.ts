export class Report {

	public patientLastName?: string;
	public patientFirstName?: string;
	public patientAge?: number;
	public speech?: string;
	public diabetesRiskLevel?: string;

	constructor(
		init?: Partial<Report>
	) {
		Object.assign(this, init)
	}
}