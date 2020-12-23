import { Injectable } from '@angular/core';
import { BacklogElement, BacklogElements } from '@io/model';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetBacklogElement } from '../backlog/backlog-element/backlog-element.actions';
import { BacklogElementState } from '../backlog/backlog-element/backlog-element.state';
import { BacklogElementsState } from '../backlog/backlog-element/backlog-elements.state';

@Injectable({
    providedIn: 'root'
})
export class BacklogElementRepository {

    @Select(BacklogElementState.element) element$: Observable<BacklogElement>;
    @Select(BacklogElementsState.elements) elements$: Observable<BacklogElements>;

    constructor(private store: Store) { }

    setBacklogElement(element: BacklogElement): Observable<any> {
        return this.store.dispatch(new SetBacklogElement(element));
    }

}
