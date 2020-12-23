import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface WarningDialogData {
    title: string;
    message: string;
    okLabel: string;
    noLabel: string;
}

@Component({
    selector: 'io-dialog-warning',
    template: `
    <h1 mat-dialog-title>{{data.title | translate}}</h1>
    <div mat-dialog-content>
        <p>{{data.message | translate}}</p>
    </div>
    <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">{{data.noLabel | translate}}</button>
        <button mat-button color="warn" mat-dialog-close="true" cdkFocusInitial>{{data.okLabel | translate}}</button>
    </div>
    `
})

export class DialogWarningComponent {

    constructor(
        public dialogRef: MatDialogRef<DialogWarningComponent>,
        @Inject(MAT_DIALOG_DATA) public data: WarningDialogData) { }

    onNoClick(): void {
        this.dialogRef.close();
    }
}