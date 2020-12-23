import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses.component';
import { CoursePreviewComponent } from './preview/course/course-preview.component';
import { CoursePreviewModule } from './preview/course/course-preview.module';
import { ModulePreviewModule } from './preview/module/module-preview.module';
import { ModulePreviewComponent } from './preview/module/module-preview.component';


const routes: Routes = [
    {
        path: '',
        component: CoursesComponent,
        children: [
            {
                path: 'course/:id',
                component: CoursePreviewComponent
            },
            {
                path: 'module/:id',
                component: ModulePreviewComponent
            }
        ]
    }
]

@NgModule({
    imports: [
        CommonModule,
        CoursePreviewModule,
        ModulePreviewModule,
        RouterModule.forChild(routes)
    ],
    declarations: [CoursesComponent]
})
export class CoursesModule {}
