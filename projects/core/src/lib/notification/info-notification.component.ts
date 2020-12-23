import { Component, Inject } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

export interface InfoNotificationData {
    message: string;
    detail?: string;
}

@Component({
    selector: 'io-info-notification',
    template: `
    <div class="d-flex">
        <p class="flex-fill">{{data.message | translate}}</p>
        <button mat-button (click)="dismiss()">{{'notification.dismiss' | translate}}</button>
    </div>
    `
})

export class InfoNotificationComponent {

    constructor(
        public ref: MatSnackBarRef<InfoNotificationComponent>,
        @Inject(MAT_SNACK_BAR_DATA) public data: InfoNotificationData) { }


    dismiss(): void {
        this.ref.dismiss();
    }

}