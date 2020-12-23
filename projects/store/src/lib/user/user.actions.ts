import { User } from '@io/model';

export class SetUser {
    static readonly type = '[User] Set User';
    constructor(public user: User) {

    }
}