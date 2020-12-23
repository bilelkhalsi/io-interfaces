import { HttpClient, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BacklogElement, BacklogElements } from '@io/model';
import { Observable } from 'rxjs';
import { Environment } from '../env/environment.model';
import { BacklogElementData, BACKLOG_ELEMENT_DATA, DefaultBlockElementData } from './backlog-element.model';

@Injectable({ providedIn: 'root' })
export class BacklogElementDataService {

    constructor(
        private http: HttpClient,
        private env: Environment,
        @Inject(BACKLOG_ELEMENT_DATA) private dataServices: BacklogElementData<BacklogElement>[]) {

    }

    getElementsPage(page: number = 0, size: number = 10): Observable<BacklogElements> {
        let params = new HttpParams();
        params = params.append('page', `${page}`);
        params = params.append('size', `${size}`);
        return this.http.get<BacklogElements>(`${this.env.backlogElementsApi}`, { params });
    }

    getElementById(id: number): Observable<BacklogElement> {
        return this.http.get<BacklogElement>(`${this.env.backlogElementsApi}/${id}`);
    }

    save(element: BacklogElement): Observable<BacklogElement> {
        return (
            this.dataServices.find(service => service.isElementSupported(element)) || new DefaultBlockElementData()
        ).save(element);
    }

    deleteElementById(id: number): Observable<void> {
        return this.http.delete<void>(`${this.env.backlogElementsApi}/${id}`);
    }

}
