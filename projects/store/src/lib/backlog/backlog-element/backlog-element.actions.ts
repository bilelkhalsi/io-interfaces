import { BacklogElement, BacklogElements } from '@io/model';

export class SetBacklogElement {
    static readonly type = '[Backlog] Set backlog element';
    constructor(public element: BacklogElement) {

    }
}

export class SetBacklogElements {
    static readonly type = '[Backlog] Set backlog elements';
    constructor(public elements: BacklogElements) {

    }
}

export class AddBacklogElement {
    static readonly type = '[Backlog] Add backlog element';
    constructor(public element: BacklogElement, public position?: number) {

    }
}

export class AddBacklogElements {
    static readonly type = '[Backlog] Add backlog elements';
    constructor(public elements: BacklogElement[]) {

    }
}

export class MoveBacklogElement {
    static readonly type = '[Backlog] Change backlog element position';
    constructor(public from: number, public to: number) {

    }
}

export class RemoveBacklogElement {
    static readonly type = '[Backlog] Remove backlog element';
    constructor(public element: BacklogElement) {

    }
}
