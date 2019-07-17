import { Injectable } from "@angular/core";
import { ICareer } from "./career-library";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class CareerService{
    private careerUrl = 'api/careers/careers.json';
    constructor(private http: HttpClient) {}

    getCareers(): Observable<ICareer[]>{
        return this.http.get<ICareer[]>(this.careerUrl).pipe(
            tap(data=>console.log('All:'+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}