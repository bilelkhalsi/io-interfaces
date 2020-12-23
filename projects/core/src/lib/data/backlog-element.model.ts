import { InjectionToken } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BacklogElement } from '@io/model';


export const BACKLOG_ELEMENT_DATA = new InjectionToken<BacklogElementData<BacklogElement>[]>('BACKLOG_ELEMENT_DATA');


export interface BacklogElementData<T extends BacklogElement> {

    save(element: T): Observable<T>;
    get(id: number): Observable<T>;

    isElementSupported(element: T): boolean;
}


export class DefaultBlockElementData implements BacklogElementData<BacklogElement> {

    save(element: BacklogElement): Observable<BacklogElement> {
        console.log('There is no data service for this type of element :', element);
        return of();
    }

    get(id: number): Observable<BacklogElement> {
        console.log('There is no data service to get this type of element !');
        return of();
    }

    isElementSupported(element: BacklogElement): boolean {
        return false;
    }

}