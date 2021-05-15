import { HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptorService implements HttpInterceptor {

	constructor() { }

	intercept(request: HttpRequest<any>, next: HttpHandler) {
		console.log("Http request started");
		return next.handle(request)
			.pipe(
				catchError((error: HttpErrorResponse) => {
					const errorMessage = this.setError(error);
					console.log(error);
					alert(errorMessage);
					return throwError(errorMessage);
				})
			);
	}

	setError(error: HttpErrorResponse): string {
		let errorMessage = "Unknown error occured";
		
		if (error.error instanceof ErrorEvent||error.status !== 0) {
			errorMessage = error.error.message;
		}
		
		return errorMessage;
	}
	
}