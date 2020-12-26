import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BacklogElementListModule, BacklogModuleListModule, ElementFormModule, BacklogModuleFormModule } from '@io/backlog';
import { BacklogContentComponent } from './backlog-content.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ElementFormModule,
        BacklogElementListModule,
        BacklogModuleFormModule,
        BacklogModuleListModule
    ],
    exports: [BacklogContentComponent],
    declarations: [BacklogContentComponent]
})
export class BacklogContentModule { }
