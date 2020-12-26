import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BacklogFacade } from '@io/core/service';
import { RemoteBacklogElement } from '@io/model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BacklogElementForm } from '../backlog-element-form';
import { BacklogElementFormDialog, ElementFormDialogData } from '../backlog-element-form.dialog';


@Component({
    selector: 'io-video-element-form-dialog',
    templateUrl: 'video-element-form.dialog.html',
    styleUrls: ['video-element-form.dialog.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class VideoElementFormDialogComponent implements BacklogElementFormDialog<RemoteBacklogElement> {

    constructor(
        public dialogRef: MatDialogRef<VideoElementFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ElementFormDialogData<RemoteBacklogElement>) {
    }

    onSubmit(element: RemoteBacklogElement): void {
        this.dialogRef.close(element);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}