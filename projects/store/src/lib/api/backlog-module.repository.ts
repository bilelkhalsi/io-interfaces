import { Injectable } from '@angular/core';
import { BacklogElement, BacklogElementModule, BacklogElementModules } from '@io/model';
import { Select, Store } from '@ngxs/store';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AddBacklogElement, AddBacklogElements, RemoveBacklogElement } from '../backlog/backlog-element/backlog-element.actions';
import { BacklogElementsState } from '../backlog/backlog-element/backlog-elements.state';
import {
    AddBacklogModule,
    AddBacklogModuleElement,
    DeleteBacklogModule,
    MoveBacklogModuleElement,
    RemoveBacklogModuleElement,
    SetBacklogModules,
    SetBacklogModuleTitle,
    SetCurrentBacklogModule
} from '../backlog/backlog-module/backlog-module.actions';
import { BacklogModuleState } from '../backlog/backlog-module/backlog-module.state';
import { BacklogModulesState } from '../backlog/backlog-module/backlog-modules.state';
import { BacklogRepository } from './backlog.repository';


@Injectable({ providedIn: 'root' })
export class BacklogModuleRepository {

    @Select(BacklogModuleState.module) currentModule$: Observable<BacklogElementModule>;
    @Select(BacklogModulesState.modules) modules$: Observable<BacklogElementModules>;

    constructor(private store: Store, private backlogRepository: BacklogRepository) { }

    setCurrentBacklogModule(module: BacklogElementModule): Observable<BacklogElementModule> {
        return this.store.dispatch(new SetCurrentBacklogModule(module))
        .pipe(
            switchMap(() => this.store.selectOnce(BacklogModuleState.module))
        );
    }

    setBacklogElementModules(modules: BacklogElementModules): Observable<BacklogElementModules> {
        return this.store.dispatch(new SetBacklogModules(modules))
            .pipe(
                switchMap(() => this.store.selectOnce(BacklogModulesState.modules))
            );
    }

    addBacklogElementModule(module: BacklogElementModule): Observable<BacklogElementModules> {
        return this.store.dispatch(new AddBacklogModule(module))
        .pipe(
            switchMap(() => this.store.selectOnce(BacklogModulesState.modules))
        );
    }

    deleteModule(module: BacklogElementModule): Observable<void>   {
        return this.store.dispatch(new DeleteBacklogModule(module.id))
        .pipe(
            switchMap(() => of<void>())
        );
    }

    addModuleElement(element: BacklogElement, moduleIndex: number): Observable<void> {
        return this.store.selectOnce(BacklogElementsState.elementById)
        .pipe(
            map(byId => byId(element.id)),
            switchMap(elem => forkJoin([
                this.store.dispatch(new RemoveBacklogElement(elem)),
                this.store.dispatch(new AddBacklogModuleElement(elem, moduleIndex))
            ])),
            switchMap(() => of<void>())
        );
    }

    deleteModuleElement(element: BacklogElement, backlogIndex?: number): Observable<void> {
        return this.store.selectOnce(BacklogModuleState.elementById).pipe(
            map(byId => byId(element.id)),
            switchMap(elem => forkJoin([
                this.store.dispatch(new RemoveBacklogModuleElement(elem)),
                this.store.dispatch(new AddBacklogElement(elem, backlogIndex))
            ])),
            switchMap(() => of<void>())
        );
    }

    deleteModuleElments(): Observable<void> {
        return this.store.selectOnce(BacklogModuleState.elements).pipe(
            switchMap(elements => this.store.dispatch(new AddBacklogElements(elements))),
            switchMap(() => of<void>())
        );
    }

    setCurrentModule(module: BacklogElementModule): Observable<BacklogElementModule> {
        return this.store.dispatch(new SetCurrentBacklogModule(module)).pipe(
            switchMap( () => this.store.selectOnce(BacklogModuleState.module))
        );
    }

    setModuleTitle(title: string): void {
        this.store.dispatch(new SetBacklogModuleTitle(title));
    }

    moveModuleElement(from: number, to: number): void {
        this.store.dispatch(new MoveBacklogModuleElement(from, to));
    }

}