import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Levels, LocalBacklogElement } from '@io/model';
import { BacklogElementForm } from '../backlog-element-form';


@Component({
    selector: 'io-local-element-form',
    templateUrl: 'local-element-form.component.html',
    styleUrls: ['local-element-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocalElementFormComponent implements OnChanges, OnDestroy, BacklogElementForm<LocalBacklogElement> {

    @Input()
    public levels: Levels;

    @Input()
    public element: LocalBacklogElement;

    @Output()
    public validate: EventEmitter<LocalBacklogElement> = new EventEmitter();

    @Output()
    public cancel: EventEmitter<any> = new EventEmitter();

    public formGroup: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            levelId: [null, Validators.required],
            typeId: [null, Validators.required],
            title: [null, [Validators.required, Validators.min(50), Validators.max(255)]],
            description: [null, [Validators.required, Validators.min(50)]],
            content: [null, [Validators.required, Validators.min(200)]],
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.element) {
            this.formGroup.patchValue(changes.element.currentValue);
        }
    }

    ngOnDestroy(): void {
        delete this.formGroup;
        delete this.levels;
    }

    snapshot(): LocalBacklogElement {
        return this.formGroup.value;
    }

    valid(): boolean {
        return this.formGroup.valid;
    }

}
