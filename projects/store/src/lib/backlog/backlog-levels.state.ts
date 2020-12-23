import { Injectable } from '@angular/core';
import { Level, Levels } from '@io/model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetBacklogLevels } from './backlog.actions';


@State<Levels>({
    name: 'backlogLevels'
})
@Injectable()
export class BacklogLevelsState {

    @Selector()
    static levels(state: Levels): Levels {
        return state;
    }

    @Selector()
    static levelById(state: Levels): (id: number) => Level {
        return (id: number) => (state || []).find(level => id === level.id);
    }

    @Action(SetBacklogLevels)
    setBacklogLevels(ctx: StateContext<Levels>, { levels }: SetBacklogLevels): void {
        ctx.setState(levels);
    }
}