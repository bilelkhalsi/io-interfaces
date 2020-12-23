import { Injectable } from '@angular/core';
import { BacklogElement, BacklogElements, BacklogElementType, BacklogElementTypes, Level, Levels } from '@io/model';
import { Select, Store } from '@ngxs/store';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AddBacklogElement, MoveBacklogElement, RemoveBacklogElement, SetBacklogElements } from '../backlog/backlog-element/backlog-element.actions';
import { BacklogElementsState } from '../backlog/backlog-element/backlog-elements.state';
import { BacklogLevelsState } from '../backlog/backlog-levels.state';
import { RemoveBacklogModuleElement } from '../backlog/backlog-module/backlog-module.actions';
import { BacklogModuleState } from '../backlog/backlog-module/backlog-module.state';
import { BacklogTypesState } from '../backlog/backlog-types.state';
import { SetBacklogElementTypes, SetBacklogLevels } from '../backlog/backlog.actions';


@Injectable({
    providedIn: 'root'
})
export class BacklogRepository {

    @Select(BacklogLevelsState.levels) levels$: Observable<Levels>;
    @Select(BacklogTypesState.types) types$: Observable<BacklogElementTypes>;
    @Select(BacklogElementsState.elements) elements$: Observable<BacklogElements>;

    constructor(private store: Store) { }


    addBacklogElement(element: BacklogElement): Observable<BacklogElement> {
        return this.store.dispatch(new AddBacklogElement(element)).pipe(
            map(() => element)
        );
    }


    deleteBacklogElement(element: BacklogElement): Observable<void> {
        return this.store.dispatch(new RemoveBacklogElement(element)).pipe(
            switchMap(() => of<void>())
        );
    }

    moveModuleElmentToBacklog(moduleIndex: number, backlogIndex: number): Observable<void> {
        return this.store.selectOnce(BacklogModuleState.elementByIndex).pipe(
            map(byIdx => byIdx(moduleIndex)),
            switchMap(element => forkJoin([
                this.store.dispatch(new RemoveBacklogModuleElement(element)),
                this.store.dispatch(new AddBacklogElement(element, backlogIndex))
            ])),
            switchMap(() => of<void>())
        );
    }


    moveBacklogElement(from: number, to: number): void {
        this.store.dispatch(new MoveBacklogElement(from, to));
    }

    setBacklogElements(elements: BacklogElements): Observable<any> {
        return this.store.dispatch(new SetBacklogElements(elements)).pipe(
            switchMap(() => this.store.selectOnce(BacklogElementsState.elements))
        );
    }

    getLevelById(id: number): Observable<Level> {
        return this.store.select(BacklogLevelsState.levelById).pipe(
            map(levelById => levelById(id))
        );
    }

    getTypeById(id: number): Observable<BacklogElementType> {
        return this.store.select(BacklogTypesState.typeById).pipe(map(typeById => typeById(id)));
    }

    setBacklogLevels(levels: Levels): Observable<Levels>  {
        return this.store.dispatch(new SetBacklogLevels(levels)).pipe(
            switchMap(() => this.store.selectOnce(BacklogLevelsState.levels))
        );
    }

    setBacklogElementTypes(types: BacklogElementTypes): Observable<BacklogElementTypes> {
        return this.store.dispatch(new SetBacklogElementTypes(types)).pipe(
            switchMap(() => this.store.selectOnce(BacklogTypesState.types))
        );
    }

}