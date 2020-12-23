import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { BacklogElement } from '@io/model';
import { SetBacklogElement } from './backlog-element.actions';

@State<BacklogElement>({
    name: 'backlogElement'
})
@Injectable()
export class BacklogElementState {


    @Selector()
    public static element(state: BacklogElement): BacklogElement {
        return state;
    }

    @Action(SetBacklogElement)
    setBacklogElement(ctx: StateContext<BacklogElement>, { element }: SetBacklogElement): void {
        ctx.setState(element);
    }

}
