import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import {
    ErrorNotificationComponent,
    ErrorNotificationData
} from './error-notification.component';
import {
    InfoNotificationComponent,
    InfoNotificationData
} from './info-notification.component';

@Injectable({ providedIn: 'root' })
export class NotificationService {

    constructor(private snackBar: MatSnackBar) { }

    info(message: string): MatSnackBarRef<InfoNotificationComponent> {
        const data: InfoNotificationData = {
            message,
        };
        return this.snackBar.openFromComponent(InfoNotificationComponent, { data, duration: 3000, panelClass: ['info-notification'] });
    }

    error(message: string): MatSnackBarRef<ErrorNotificationComponent> {
        const data: ErrorNotificationData = {
            message
        };
        return this.snackBar.openFromComponent(ErrorNotificationComponent, { data, duration: 3000, panelClass: ['error-notification'] });
    }
}