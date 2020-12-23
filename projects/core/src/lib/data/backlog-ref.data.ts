import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BacklogElementTypes, Levels } from '@io/model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Environment } from '../env/environment.model';

@Injectable({ providedIn: 'root' })
export class BacklogRefDataService {

    constructor(private http: HttpClient, private env: Environment) {
    }

    backlogLevels(): Observable<Levels> {
        return this.http.get<Levels>(`${this.env.backlogRefApi}/levels`).pipe(
            catchError(err => {
                console.warn(err);
                return of([]);
            })
        );
    }

    backlogElementTypes(): Observable<BacklogElementTypes> {
        return this.http.get<BacklogElementTypes>(`${this.env.backlogRefApi}/types`).pipe(
            catchError(err => {
                console.warn(err);
                return of([]);
            })
        );
    }
}