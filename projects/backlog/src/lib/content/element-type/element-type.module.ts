import { NgModule } from '@angular/core';

import { ElementTypeComponent } from './element-type.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [ElementTypeComponent],
    declarations: [ElementTypeComponent]
})
export class ElementTypeModule { }
