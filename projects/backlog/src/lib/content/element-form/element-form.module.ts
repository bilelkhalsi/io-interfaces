import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AudioElementFormModule } from './audio-element/audio-element-form.module';
import { DocumentElementFormModule } from './document-element/document-element-form.module';
import { ElementFormComponent } from './element-form.component';
import { ImageElementFormModule } from './image-element/image-element-form.module';
import { VideoElementFormModule } from './video-element/video-element-form.module';


@NgModule({
    imports: [
        CommonModule,
        DocumentElementFormModule,
        ImageElementFormModule,
        AudioElementFormModule,
        VideoElementFormModule
    ],
    declarations: [ElementFormComponent],
    exports: [ElementFormComponent],
})
export class ElementFormModule { }
