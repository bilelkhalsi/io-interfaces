import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RemoteBacklogElement } from '@io/model';
import { BacklogElementFormDialog, ElementFormDialogData } from '../backlog-element-form.dialog';


@Component({
    selector: 'io-image-element-form-dialog',
    templateUrl: 'image-element-form.dialog.html',
    styleUrls: ['image-element-form.dialog.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class ImageElementFormDialogComponent implements BacklogElementFormDialog<RemoteBacklogElement> {

    constructor(
        public dialogRef: MatDialogRef<ImageElementFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ElementFormDialogData<RemoteBacklogElement>) {
    }

    onSubmit(element: RemoteBacklogElement): void {
        this.dialogRef.close(element);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}