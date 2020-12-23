import { Injectable } from '@angular/core';
import { BacklogElementModules } from '@io/model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { addItemToArray, removeItemAt } from '../../util';
import { AddBacklogModule, DeleteBacklogModule, SetBacklogModules } from './backlog-module.actions';

@State<BacklogElementModules>({
    name: 'backlogModules',
    defaults: []
})
@Injectable()
export class BacklogModulesState {


    @Selector()
    static modules(state: BacklogElementModules): BacklogElementModules {
        return state;
    }


    @Action(SetBacklogModules)
    setBacklogModules(ctx: StateContext<BacklogElementModules>, { modules }: SetBacklogModules): void {
        ctx.setState(modules);
    }

    @Action(AddBacklogModule)
    addBacklogModule(ctx: StateContext<BacklogElementModules>, { module }: AddBacklogModule): void {
        ctx.setState(addItemToArray(module));
    }

    @Action(DeleteBacklogModule)
    deleteBacklogModule(ctx: StateContext<BacklogElementModules>, { id }: DeleteBacklogModule): void {
        const index = ctx.getState().findIndex(item => item.id === id);
        ctx.setState(removeItemAt(index));
    }

}
