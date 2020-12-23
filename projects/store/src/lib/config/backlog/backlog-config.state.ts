import { Injectable } from '@angular/core';
import { BacklogConfig } from '@io/model';
import { Selector, State, StateToken } from '@ngxs/store';
import { BacklogContentConfigState } from './backlog-content-config.state';

export const BACKLOG_CONFIG_STATE_TOKEN = new StateToken<BacklogConfig>('backlogConfig');

@State<BacklogConfig>({
    name: BACKLOG_CONFIG_STATE_TOKEN,
    children: [
        BacklogContentConfigState
    ]
})
@Injectable()
export class BacklogConfigState {


    @Selector()
    static config(state: BacklogConfig): BacklogConfig {
        return state;
    }

}