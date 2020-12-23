import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BacklogElementTypeId, RemoteBacklogElement } from '@io/model';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Environment } from '../env/environment.model';
import { readFile } from '../util/rx-file-reader';
import { BacklogElementData } from './backlog-element.model';

@Injectable()
export class RemoteBacklogElementDataService implements BacklogElementData<RemoteBacklogElement> {

    constructor(private http: HttpClient, private env: Environment) {

    }

    save(element: RemoteBacklogElement): Observable<RemoteBacklogElement> {
        if (!element.id) {
            const content: File = (element.content && element.content) ? element.content : null;
            const headers = new HttpHeaders()
                .append('Content-Type', content.type)
            return readFile(content)
                .pipe(
                    switchMap(raw =>
                        this.http.post<string>(
                            `${this.env.backlogFilerApi}`,
                            raw,
                            { headers, responseType: 'text' as 'json' }
                        )
                    ),
                    switchMap((url: string) => {
                        return this.http.post<RemoteBacklogElement>(
                            `${this.env.backlogElementsApi}/remote`,
                            { ...element, content: undefined, url }
                        );
                    })
                );
        } else {
            return this.http.put<RemoteBacklogElement>(
                `${this.env.backlogElementsApi}/remote/${element.id}`,
                element
            );
        }
    }

    get(id: number): Observable<RemoteBacklogElement> {
        return of();
    }

    isElementSupported(element: RemoteBacklogElement): boolean {
        return [BacklogElementTypeId.AUDIO, BacklogElementTypeId.IMAGE, BacklogElementTypeId.VIDEO].includes(element.typeId);
    }

}