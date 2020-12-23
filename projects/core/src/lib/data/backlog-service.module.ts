import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BACKLOG_ELEMENT_DATA } from './backlog-element.model';
import { LocalBacklogElementDataService } from './local-backlog-element.data';
import { RemoteBacklogElementDataService } from './remote-backlog-element.data';


@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        { provide: BACKLOG_ELEMENT_DATA, useClass: LocalBacklogElementDataService, multi: true },
        { provide: BACKLOG_ELEMENT_DATA, useClass: RemoteBacklogElementDataService, multi: true }
    ]
})
export class BacklogServiceModule { }
