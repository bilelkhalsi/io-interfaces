import { Injectable } from '@angular/core';
import { BacklogElements } from '@io/model';
import { State } from '@ngxs/store';
import { BacklogElementState } from './backlog-element/backlog-element.state';
import { BacklogElementsState } from './backlog-element/backlog-elements.state';
import { BacklogLevelsState } from './backlog-levels.state';
import { BacklogModuleState } from './backlog-module/backlog-module.state';
import { BacklogModulesState } from './backlog-module/backlog-modules.state';
import { BacklogTypesState } from './backlog-types.state';
import { SetBacklogLevels } from './backlog.actions';

export declare type Backlog = { backlogElements: BacklogElements, backlogLevels: SetBacklogLevels };
@State<Backlog>({
    name: 'backlog',
    children: [
        BacklogElementState,
        BacklogElementsState,
        BacklogModuleState,
        BacklogModulesState,
        BacklogLevelsState,
        BacklogTypesState
    ]
})
@Injectable()
export class BacklogState {

}
