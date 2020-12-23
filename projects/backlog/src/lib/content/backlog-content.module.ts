import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CorePipeModule } from '@io/core/pipes';
import { TranslateModule } from '@ngx-translate/core';
import { BacklogContentComponent } from './backlog-content.component';
import { BacklogElementListModule } from './element-list/element-list.module';
import { BacklogModuleListModule } from './module-list/module-list.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    BacklogElementListModule,
    BacklogModuleListModule,
    CorePipeModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    DragDropModule
  ],
  declarations: [BacklogContentComponent],
  exports: [BacklogContentComponent]
})
export class BacklogContentModule {
}