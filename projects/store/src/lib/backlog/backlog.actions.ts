import { BacklogElementTypes, Levels } from '@io/model';

export class SetBacklogLevels {
    static readonly type = '[Backlog] Set Levels';
    constructor(public levels: Levels) {

    }
}

export class SetBacklogElementTypes {
    static readonly type = '[Backlog] Set Elements Types';
    constructor(public types: BacklogElementTypes) {

    }
}





