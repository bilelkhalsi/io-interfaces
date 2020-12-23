import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacklogComponent } from './backlog.component';
import { BacklogContentComponent } from './content/backlog-content.component';
import { BacklogContentModule } from './content/backlog-content.module';
import { ElementPreviewComponent } from './preview/element/element-preview.component';
import { ElementPreviewModule } from './preview/element/element-preview.module';
import { ModulePreviewComponent } from './preview/module/module-preview.component';
import { ModulePreviewModule } from './preview/module/module-preview.module';



const routes: Routes = [
    {
        path: '',
        component: BacklogComponent,
        children:[
            {
                path: '',
                component: BacklogContentComponent,
                children: [
                    {
                        path: 'element/:id',
                        component: ElementPreviewComponent
                    },
                    {
                        path: 'module/:id',
                        component: ModulePreviewComponent
                    }

                ]
            }
          
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        BacklogContentModule,
        ModulePreviewModule,
        ElementPreviewModule,
        RouterModule.forChild(routes)
    ],
    declarations: [BacklogComponent]
})
export class BacklogModule {}

