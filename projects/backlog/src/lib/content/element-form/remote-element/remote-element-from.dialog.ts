import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BacklogFacade } from '@io/core/service';
import { RemoteBacklogElement } from '@io/model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BacklogElementForm } from '../backlog-element-form';
import { BacklogElementFormDialog } from '../backlog-element-form.dialog';


@Component({
    selector: 'io-remote-element-form-dialog',
    templateUrl: 'remote-element-form.dialog.html',
    styleUrls: ['remote-element-form.dialog.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush

})
export class RemoteElementFormDialogComponent implements BacklogElementFormDialog<RemoteBacklogElement> {

    @ViewChild('form')
    form: BacklogElementForm<RemoteBacklogElement>;

    private onDestroy$ = new Subject();


    constructor(
        public backlogFacade: BacklogFacade,
        public dialogRef: MatDialogRef<RemoteElementFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { element: RemoteBacklogElement }) {
    }

    onSubmit(): void {
        this.backlogFacade.saveBacklogElement(this.form.snapshot()).pipe(
            takeUntil(this.onDestroy$)
        ).subscribe();
    }

    onCancel(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.dialogRef.close();
    }
}