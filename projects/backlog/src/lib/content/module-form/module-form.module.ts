import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CorePipeModule } from '@io/core/pipes';
import { ModuleFormComponent } from './module-form.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        MatTableModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        DragDropModule,
        CorePipeModule
    ],
    declarations: [ModuleFormComponent],
    exports: [ModuleFormComponent]
})
export class BacklogModuleFormModule { }
