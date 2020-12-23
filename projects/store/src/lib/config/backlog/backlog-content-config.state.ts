import { Injectable } from '@angular/core';
import { Selector, State, StateToken } from '@ngxs/store';
import { BacklogContentConfig, BacklogContentDefaultConfig } from '@io/model';

export const BACKLOG_CONTENT_CONFIG_STATE_TOKEN = new StateToken<BacklogContentConfig>('backlogContentConfig');

@State<BacklogContentConfig>({
    name: BACKLOG_CONTENT_CONFIG_STATE_TOKEN,
    defaults: BacklogContentDefaultConfig
})
@Injectable()
export class BacklogContentConfigState {


    @Selector()
    static contentConfig(state: BacklogContentConfig): BacklogContentConfig {
        return state;
    }

}