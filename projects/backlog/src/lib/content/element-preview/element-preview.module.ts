import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { ElementPreviewComponent } from './element-preview.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [CommonModule, TranslateModule, MatTabsModule],
    exports: [ElementPreviewComponent],
    declarations: [ElementPreviewComponent]
})
export class ElementPreviewModule { }
