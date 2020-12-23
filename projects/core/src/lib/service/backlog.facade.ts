import { Injectable } from '@angular/core';
import { BacklogElement, BacklogElementModule, BacklogElementModules, BacklogElements, BacklogElementType, BacklogElementTypes, Level, Levels } from '@io/model';
import { Observable, of } from 'rxjs';
import { BacklogElementModuleDataService } from '../data/backlog-element-module.data';
import { BacklogElementDataService } from '../data/backlog-element.data';
import { BacklogRefDataService } from '../data/backlog-ref.data';

@Injectable({
    providedIn: 'root'
})
export class BacklogFacade {

    constructor(
        private blacklogRefData: BacklogRefDataService,
        private backlogEelementData: BacklogElementDataService,
        private backlogElementModuleData: BacklogElementModuleDataService) {

    }

    public loadBacklogElementTypes(): Observable<BacklogElementTypes> {
        // TODO
        return of();
    }

    public getTypeById(typeId: number): Observable<BacklogElementType> {
        // TODO
        return of();
    }

    public getLevelById(levelId: number): Observable<Level> {
        // TODO
        return of();
    }

    public saveBacklogElement(element: BacklogElement): Observable<BacklogElement> {
        // TODO
        return of();
    }
    public getElementById(id: number): Observable<BacklogElement> {
        // TODO
        return of();
    }

    public getUserElements(): Observable<BacklogElements> {
        // TODO
        return of();
    }

    public deleteBacklogElement(element: BacklogElement): Observable<void> {
        // TODO
        return of();
    }

    public moveBacklogElementWithinModule(from: number, to: number): void {
        // TODO
    }

    public moveModuleElmentToBacklog(indexInModule: number, indexInBacklog: number): void {
        // TODO
    }

    public loadBacklogLavels(): Observable<Levels> {
        // TODO
        return of();
    }

    public getModuleById(id: number): Observable<BacklogElementModule> {
        // TODO
        return of();
    }

    public getUserModules(): Observable<BacklogElementModules> {
        // TODO
        return of();
    }

    public setCurrentModule(module: BacklogElementModule): Observable<BacklogElementModule> {
        // TODO
        return of();
    }

    public deleteModule(module: BacklogElementModule): Observable<void> {
        // TODO
        return of<void>();
    }

    public moveModuleElement(from: number, to: number): void {
        // TODO
    }

    public addModuleElement(element: BacklogElement, index: number): Observable<BacklogElementModule> {
        // TODO
        return of();
    }

    public setModuleTitle(title: string): void {
        // TODO
    }

    public saveModule(module: BacklogElementModule): Observable<BacklogElementModule> {
        // TODO
        return of();
    }

    public deleteModuleElement(element: BacklogElement): Observable<BacklogElementModule> {
        // TODO
        return of();
    }

    public get levels$(): Observable<Levels> {
        return of();
    }

    public get types$(): Observable<BacklogElementTypes> {
        return of();
    }

    public get element$(): Observable<BacklogElement> {
        return of();
    }

    public get elements$(): Observable<BacklogElements> {
        return of();
    }

    public get modules$(): Observable<BacklogElementModules> {
        return of();
    }

    public get currentModule$(): Observable<BacklogElementModule> {
        return of();
    }
}
