import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface InfoDialogData {
    title: string;
    message: string;
    okLabel: string;
}

@Component({
    selector: 'io-dialog-info',
    template: `
    <h1 mat-dialog-title>{{data.title | translate}}</h1>
    <div mat-dialog-content>
        <p>{{data.message | translate}}</p>
    </div>
    <div mat-dialog-actions>
        <button mat-button color="primary" mat-dialog-close="true" cdkFocusInitial>{{data.okLabel | translate}}</button>
    </div>
    `
})

export class DialogInfoComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogInfoComponent>,
        @Inject(MAT_DIALOG_DATA) public data: InfoDialogData) { }

}