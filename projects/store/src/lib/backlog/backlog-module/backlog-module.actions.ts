// backlog current module actions

import { BacklogElement, BacklogElementModule, BacklogElementModules } from '@io/model';


export class SetCurrentBacklogModule {
    static readonly type = '[Backlog] Set current backlog module';
    constructor(public module: BacklogElementModule) {

    }
}


export class SetBacklogModuleTitle {
    static readonly type = '[Backlog] Set current module title';
    constructor(public title: string) {

    }
}

export class AddBacklogModuleElement {
    static readonly type = '[Backlog] Add element to module';
    constructor(public element: BacklogElement, public position?: number) {

    }
}

export class MoveBacklogModuleElement {
    static readonly type = '[Backlog] Change module element position';
    constructor(public from: number, public to: number) {

    }
}

export class RemoveBacklogModuleElement {
    static readonly type = '[Backlog] Remove module element';
    constructor(public element: BacklogElement) {

    }
}



// backlog modules actions


export class SetBacklogModules {
    static readonly type = '[Backlog] Set backlog modules';
    constructor(public modules: BacklogElementModules) {

    }
}


export class AddBacklogModule {
    static readonly type = '[Backlog] Add backlog module';
    constructor(public module: BacklogElementModule) {

    }
}

export class MoveBacklogModule {
    static readonly type = '[Backlog] Change module position in modules list';
    constructor(public from: number, public to: number) {

    }
}

export class DeleteBacklogModule {
    static readonly type = '[Backlog] Remove backlog module';
    constructor(public id: number) {

    }
}
