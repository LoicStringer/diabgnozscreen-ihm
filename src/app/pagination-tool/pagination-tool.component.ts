import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Page } from '../pagination/page';

@Component({
	selector: 'app-pagination-tool',
	templateUrl: './pagination-tool.component.html',
	styleUrls: ['./pagination-tool.component.scss']
})
export class PaginationToolComponent implements OnInit {

	@Input() page!: Page<any>;
	@Output() nextPageEvent = new EventEmitter();
	@Output() previousPageEvent = new EventEmitter();


	constructor() { }

	ngOnInit(): void {
	}

	nextPage(): void {
		this.nextPageEvent.emit(null);
	}

	previousPage(): void {
		this.previousPageEvent.emit(null);
	}

  

}
