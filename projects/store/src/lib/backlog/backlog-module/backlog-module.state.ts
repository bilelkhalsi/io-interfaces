import { Injectable } from '@angular/core';
import { BacklogElement, BacklogElementModule, BacklogElements } from '@io/model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { addItemToArray, moveItemInArray, removeItemAt } from '../../util';
import {
    AddBacklogModuleElement,
    MoveBacklogModuleElement,
    RemoveBacklogModuleElement,
    SetBacklogModuleTitle,
    SetCurrentBacklogModule
} from './backlog-module.actions';

@State<BacklogElementModule>({
    name: 'backlogModule',
    defaults: null
})
@Injectable()
export class BacklogModuleState {


    @Selector()
    static module(state: BacklogElementModule): BacklogElementModule {
        return state;
    }

    @Selector()
    static elements(state: BacklogElementModule): BacklogElements {
        return (state) ? state.elements : [];
    }

    @Selector()
    static elementByIndex(state: BacklogElementModule): (idx: number) => BacklogElement {
        return (idx: number) => {
            return (state && state.elements) ? state.elements[idx] : undefined;
        };
    }

    @Selector()
    static elementById(state: BacklogElementModule): (id: number) => BacklogElement {
        return (id: number) => {
            return (state.elements || []).find(element => element.id === id);
        }
    }


    @Action(SetCurrentBacklogModule)
    setBacklogModuleElements(ctx: StateContext<BacklogElementModule>, { module }: SetCurrentBacklogModule): void {
        ctx.setState(module);
    }

    @Action(SetBacklogModuleTitle)
    setBacklogModuleTitle(ctx: StateContext<BacklogElementModule>, { title }: SetBacklogModuleTitle): void {
        ctx.setState({
            ...ctx.getState(),
            title
        });
    }


    @Action(AddBacklogModuleElement)
    addBacklogModuleElement(ctx: StateContext<BacklogElementModule>, { element, position }: AddBacklogModuleElement): void {
        const oldElements: BacklogElements = ctx.getState().elements;
        const elements: BacklogElements = addItemToArray<BacklogElement>(element, position)(oldElements);
        ctx.setState({
            ...ctx.getState(),
            elements
        });
    }


    @Action(MoveBacklogModuleElement)
    moveBacklogModuleElement(ctx: StateContext<BacklogElementModule>, { from, to }: MoveBacklogModuleElement): void {
        const oldElements: BacklogElements = ctx.getState().elements;
        const elements: BacklogElements = moveItemInArray<BacklogElement>(from, to)(oldElements);
        ctx.setState({
            ...ctx.getState(),
            elements
        });
    }


    @Action(RemoveBacklogModuleElement)
    removeBacklogModuleElement(ctx: StateContext<BacklogElementModule>, { element }: RemoveBacklogModuleElement): void {
        const oldElemens = ctx.getState().elements;
        const index = oldElemens.findIndex(item => item.id === element.id);
        const elements = removeItemAt<BacklogElement>(index)(oldElemens);
        ctx.setState({
            ...ctx.getState(),
            elements
        });
    }

}
