import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModulePreviewComponent } from './module-preview.component';
import { RouterModule } from '@angular/router';


@NgModule({
    imports: [CommonModule, RouterModule],
    declarations: [ModulePreviewComponent],
    exports: [ModulePreviewComponent],
})
export class BacklogModulePreviewModule { }
