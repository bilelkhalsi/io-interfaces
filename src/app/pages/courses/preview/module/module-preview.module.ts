import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModulePreviewComponent } from './module-preview.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ModulePreviewComponent],
    declarations: [ModulePreviewComponent]
})
export class ModulePreviewModule { }
