import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LivesComponent } from './lives.component';


const routes: Routes = [{
    path: '',
    component: LivesComponent
}]

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    declarations: [LivesComponent]
})
export class LivesModule {}
