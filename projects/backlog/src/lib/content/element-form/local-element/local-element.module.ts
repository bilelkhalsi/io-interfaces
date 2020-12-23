import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { TranslateModule } from '@ngx-translate/core';
import { LocalElementFormComponent } from './local-element-form.component';
import { LocalElementFormDialogComponent } from './local-element-from.dialog';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        ReactiveFormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule
    ],
    declarations: [
        LocalElementFormComponent,
        LocalElementFormDialogComponent
    ],
    exports: [
        LocalElementFormComponent,
        LocalElementFormDialogComponent
    ]
})
export class LocalElementModule { }