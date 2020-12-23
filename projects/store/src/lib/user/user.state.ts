import { Injectable } from '@angular/core';
import { User } from '@io/model';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SetUser } from './user.actions';

@State<User>({
    name: 'user',
})
@Injectable()
export class UserState {

    @Selector()
    static user(state: User): User {
        return state;
    }

    @Selector()
    static email(state: User): string {
        return !!state ? state.email : null;
    }

    @Action(SetUser)
    setUser(ctx: StateContext<User>, { user }: SetUser): void {
        ctx.setState(user);
    }

}
