import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BacklogFacade } from '@io/core/service';
import { LocalBacklogElement } from '@io/model/backlog/backlog-element';
import { BacklogElementFormDialog, ElementFormDialogData } from '../backlog-element-form.dialog';

@Component({
    selector: 'io-document-element-form-dialog',
    templateUrl: 'document-element-form.dialog.html',
    styleUrls: ['document-element-form.dialog.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class DocumentElementFormDialogComponent implements BacklogElementFormDialog<LocalBacklogElement> {

    constructor(
        public dialogRef: MatDialogRef<DocumentElementFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ElementFormDialogData<LocalBacklogElement>) {
    }

    onSubmit(element: LocalBacklogElement): void {
        this.dialogRef.close(element);
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}