import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogInfoComponent, InfoDialogData } from './dialog-info.component';
import { WarningDialogData, DialogWarningComponent } from './dialog-warning.component';

@Injectable({ providedIn: 'root' })
export class DialogService {

    constructor(private dialog: MatDialog) { }

    openInfoDialog(message: string): MatDialogRef<DialogInfoComponent> {
        const data: InfoDialogData = {
            message,
            title: 'dialog.info.title',
            okLabel: 'dialog.info.ok'
        }
        return this.dialog.open(DialogInfoComponent, { data });
    }

    openWarningDialog(message: string): MatDialogRef<DialogWarningComponent> {
        const data: WarningDialogData = {
            message,
            title: 'dialog.warning.title',
            okLabel: 'dialog.warning.ok',
            noLabel: 'dialog.warning.no'
        }
        return this.dialog.open(DialogWarningComponent, { data });
    }
}