import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BacklogElement, ElementType, Levels, LocalBacklogElement } from '@io/model';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { AudioElementFormDialogComponent } from './audio-element/audio-element-from.dialog';
import { ElementFormDialogData } from './backlog-element-form.dialog';
import { DocumentElementFormDialogComponent } from './document-element/document-element-from.dialog';
import { ImageElementFormDialogComponent } from './image-element/image-element-from.dialog';
import { VideoElementFormDialogComponent } from './video-element/video-element-from.dialog';


const ELMENT_DIALOG_COMPONENT = new Map<ElementType, any>([
    [ElementType.AUDIO, AudioElementFormDialogComponent],
    [ElementType.DOCUMENT, DocumentElementFormDialogComponent],
    [ElementType.IMAGE, ImageElementFormDialogComponent],
    [ElementType.VIDEO, VideoElementFormDialogComponent]
])
@Component({
    selector: 'io-element-form',
    templateUrl: 'element-form.component.html',
    styleUrls: ['element-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ElementFormComponent implements OnDestroy {

    private readonly onDestroy$ = new Subject();

    @Input()
    levels: Levels = []

    @Input()
    types: ElementType[] = [ElementType.VIDEO, ElementType.AUDIO];

    @Input()
    element: BacklogElement;

    @Output()
    save = new EventEmitter<BacklogElement>();

    public elementTitle = new FormControl();

    constructor(private dialog: MatDialog) {
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    openNewElementDialog(type: ElementType) {
        const component = ELMENT_DIALOG_COMPONENT.get(type);
        const data: ElementFormDialogData<BacklogElement> = {
            type,
            element: this.element,
            levels: this.levels
        };
        this.dialog.open(component, { data, minWidth: '50%' }).afterClosed()
            .pipe(
                takeUntil(this.onDestroy$),
                filter(res => !!res)
            ).subscribe(res => {
                this.save.emit(res);
            });
    }
}