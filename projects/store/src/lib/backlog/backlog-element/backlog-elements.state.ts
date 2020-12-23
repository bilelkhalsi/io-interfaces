import { Injectable } from '@angular/core';
import { BacklogElement, BacklogElements } from '@io/model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { addItemToArray, moveItemInArray, removeItemAt, replaceItemAt } from '../../util';
import {
    AddBacklogElement,
    AddBacklogElements,
    MoveBacklogElement,
    RemoveBacklogElement,
    SetBacklogElements
} from './backlog-element.actions';

@State<BacklogElements>({
    name: 'backlogElements',
    defaults: []
})
@Injectable()
export class BacklogElementsState {


    @Selector()
    static elements(state: BacklogElements): BacklogElements {
        return state;
    }

    @Selector()
    static elementByIndex(state: BacklogElements): (idx: number) => BacklogElement {
        return (idx: number) => state[idx];
    }


    @Selector()
    static elementById(state: BacklogElements): (id: number) => BacklogElement {
        return (id: number) => (state || []).find(element => element.id === id);
    }

    @Action(SetBacklogElements)
    setBacklogElements(ctx: StateContext<BacklogElements>, { elements }: SetBacklogElements): void {
        ctx.setState(elements);
    }

    @Action(AddBacklogElement)
    addElement(ctx: StateContext<BacklogElements>, { element, position }: AddBacklogElement): void {
        const index = ctx.getState().findIndex(elem => elem.id === element.id);
        if (index === -1) {
            ctx.setState(addItemToArray(element, position));
        } else {
            ctx.setState(replaceItemAt(element, index));
        }
    }

    @Action(AddBacklogElements)
    addElements(ctx: StateContext<BacklogElements>, { elements }: AddBacklogElements): void {
        ctx.setState(ctx.getState().concat((elements || [])));
    }

    @Action(MoveBacklogElement)
    moveBacklogElement(ctx: StateContext<BacklogElements>, { from, to }: MoveBacklogElement): void {
        ctx.setState(moveItemInArray(from, to));
    }


    @Action(RemoveBacklogElement)
    removeBacklogElement(ctx: StateContext<BacklogElements>, { element }: RemoveBacklogElement): void {
        const index = ctx.getState().findIndex(item => item.id === element.id);
        ctx.setState(removeItemAt(index));
    }

}
