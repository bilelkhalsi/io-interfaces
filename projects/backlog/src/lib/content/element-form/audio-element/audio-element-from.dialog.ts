import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RemoteBacklogElement } from '@io/model';
import { BacklogElementFormDialog, ElementFormDialogData } from '../backlog-element-form.dialog';

@Component({
    selector: 'io-audio-element-form-dialog',
    templateUrl: 'audio-element-form.dialog.html',
    styleUrls: ['audio-element-form.dialog.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class AudioElementFormDialogComponent implements BacklogElementFormDialog<RemoteBacklogElement> {

    constructor(
        public dialogRef: MatDialogRef<AudioElementFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ElementFormDialogData<RemoteBacklogElement>) {
    }

    onSubmit(element: RemoteBacklogElement): void {
        this.dialogRef.close(element);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}