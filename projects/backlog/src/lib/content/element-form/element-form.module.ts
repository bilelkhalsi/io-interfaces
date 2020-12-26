import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { TranslateModule } from '@ngx-translate/core';
import { AudioElementFormModule } from './audio-element/audio-element-form.module';
import { DocumentElementFormModule } from './document-element/document-element-form.module';
import { ElementFormComponent } from './element-form.component';
import { ImageElementFormModule } from './image-element/image-element-form.module';
import { VideoElementFormModule } from './video-element/video-element-form.module';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        DocumentElementFormModule,
        ImageElementFormModule,
        AudioElementFormModule,
        VideoElementFormModule
    ],
    declarations: [ElementFormComponent],
    exports: [
        ElementFormComponent
    ],
})
export class ElementFormModule { }
