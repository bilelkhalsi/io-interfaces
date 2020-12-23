import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ElementLevelComponent } from './element-level.component';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [CommonModule, MatTooltipModule],
    exports: [ElementLevelComponent],
    declarations: [ElementLevelComponent]
})
export class ElementLevelModule { }
