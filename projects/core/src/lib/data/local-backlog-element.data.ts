import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BacklogElementTypeId, LocalBacklogElement } from '@io/model';
import { Observable, of } from 'rxjs';
import { Environment } from '../env/environment.model';
import { BacklogElementData } from './backlog-element.model';

@Injectable()
export class LocalBacklogElementDataService implements BacklogElementData<LocalBacklogElement> {

    constructor(private http: HttpClient, private env: Environment) {

    }

    save(element: LocalBacklogElement): Observable<LocalBacklogElement> {
        return !element.id ?
            this.http.post<LocalBacklogElement>(
                `${this.env.backlogElementsApi}/local`,
                element
            ) : this.http.put<LocalBacklogElement>(
                `${this.env.backlogElementsApi}/local/${element.id}`,
                { ...element, content: '' }
            );
    }

    get(id: number): Observable<LocalBacklogElement> {
        return of();
    }

    isElementSupported(element: LocalBacklogElement): boolean {
        return BacklogElementTypeId.DOCUMENT === element.typeId;
    }

}