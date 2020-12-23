import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BacklogFacade } from '@io/core/service';
import { LocalBacklogElement } from '@io/model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { BacklogElementForm } from '../backlog-element-form';
import { BacklogElementFormDialog } from '../backlog-element-form.dialog';


@Component({
    selector: 'io-local-element-form-dialog',
    templateUrl: 'local-element-form.dialog.html',
    styleUrls: ['local-element-form.dialog.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalElementFormDialogComponent implements BacklogElementFormDialog<LocalBacklogElement> {

    @ViewChild('form')
    form: BacklogElementForm<LocalBacklogElement>;

    private onDestroy$ = new Subject();


    constructor(
        public backlogFacade: BacklogFacade,
        public dialogRef: MatDialogRef<LocalElementFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { element: LocalBacklogElement }) {
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