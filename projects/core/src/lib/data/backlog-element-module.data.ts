import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BacklogElementModule, BacklogElementModules } from '@io/model';
import { Observable } from 'rxjs';
import { Environment } from '../env/environment.model';

@Injectable({ providedIn: 'root' })
export class BacklogElementModuleDataService {

    constructor(private http: HttpClient, private env: Environment) {
    }

    getModuleById(id: number): Observable<BacklogElementModule> {
        return this.http.get<BacklogElementModule>(
            `${this.env.backlogModulesApi}/${id}`
        );
    }

    getUserModules(): Observable<BacklogElementModules> {
        return this.http.get<BacklogElementModules>(
            this.env.backlogModulesApi
        );
    }

    saveModule(module: BacklogElementModule): Observable<BacklogElementModule> {
        return !module.id ?
            this.http.post<BacklogElementModule>(
                `${this.env.backlogModulesApi}`, module
            ) : this.http.put<BacklogElementModule>(
                `${this.env.backlogModulesApi}/${module.id}`, module
            );
    }

    deleteModule(id: number): Observable<any> {
        return this.http.delete<any>(
            `${this.env.backlogModulesApi}/${id}`
        );
    }
}