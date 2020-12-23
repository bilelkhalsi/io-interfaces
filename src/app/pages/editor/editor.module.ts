import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor.component';


const routes: Routes = [{
    path: '',
    component: EditorComponent
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [EditorComponent]
})
export class EditorModule {}
