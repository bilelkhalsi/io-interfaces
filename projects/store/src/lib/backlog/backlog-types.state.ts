import { Injectable } from '@angular/core';
import { BacklogElementType, BacklogElementTypes } from '@io/model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetBacklogElementTypes } from './backlog.actions';


@State<BacklogElementTypes>({
    name: 'backlogTypes'
})
@Injectable()
export class BacklogTypesState {

    @Selector()
    static types(state: BacklogElementTypes): BacklogElementTypes {
        return state;
    }

    @Selector()
    static typeById(state: BacklogElementTypes): (id: number) => BacklogElementType {
        return (id: number) => (state || []).find(type => id === type.id);
    }

    @Action(SetBacklogElementTypes)
    setBacklogLevels(ctx: StateContext<BacklogElementTypes>, { types }: SetBacklogElementTypes): void {
        ctx.setState(types);
    }

}