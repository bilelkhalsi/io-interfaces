import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'mybacklog',
        loadChildren: () => import('./pages/backlog/backlog.module').then(m => m.BacklogModule)
      }, {
        path: 'mycourses',
        loadChildren: () => import('./pages/courses/courses.module').then(m => m.CoursesModule)
      },{
        path: 'mylives',
        loadChildren: () => import('./pages/lives/lives.module').then(m => m.LivesModule)
      },{
        path: 'support',
        loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
      }, {
        path: 'editor',
        loadChildren: () => import('./pages/editor/editor.module').then(m => m.EditorModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: !environment.production})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
