import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ElementPreviewComponent } from './element-preview.component';

@NgModule({
    imports: [CommonModule, RouterModule],
    exports: [ElementPreviewComponent],
    declarations: [ElementPreviewComponent]
})
export class ElementPreviewModule { }
