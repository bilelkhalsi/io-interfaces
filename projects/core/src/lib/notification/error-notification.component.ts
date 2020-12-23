import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface ErrorNotificationData {
    message: string;
    detail?: string;
}

@Component({
    selector: 'io-nofication-error',
    template: `
    <div class="d-flex">
        <p class="flex-fill">{{data.message | translate}}</p>
        <button mat-button (click)="dismiss()">{{'notification.dismiss' | translate}}</button>
    </div>
    `
})

export class ErrorNotificationComponent {

    constructor(
        public ref: MatSnackBarRef<ErrorNotificationComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: ErrorNotificationData) { }

    dismiss() {
        this.ref.dismiss();
    }
}