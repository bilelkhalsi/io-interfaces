import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CoreDirectiveModule } from '@io/core/directives';
import { CorePipeModule } from '@io/core/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { ElementLevelModule } from '../element-level/element-level.module';
import { ElementTypeModule } from '../element-type/element-type.module';
import { BacklogModuleListComponent } from './module-list.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule,
        MatMenuModule,
        MatTableModule,
        MatCheckboxModule,
        DragDropModule,
        CorePipeModule,
        CoreDirectiveModule,
        ElementTypeModule,
        ElementLevelModule
    ],
    declarations: [BacklogModuleListComponent],
    exports: [BacklogModuleListComponent]
})
export class BacklogModuleListModule { }
