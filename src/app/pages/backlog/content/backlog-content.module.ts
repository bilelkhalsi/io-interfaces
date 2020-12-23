import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BacklogContentComponent } from './backlog-content.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [BacklogContentComponent],
    declarations: [BacklogContentComponent]
})
export class BacklogContentModule { }
