import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BacklogElementMediaType, BacklogElementTypeId, Levels, LocalBacklogElement } from '@io/model';
import { BacklogElementForm } from '../backlog-element-form';


@Component({
    selector: 'io-document-element-form',
    templateUrl: 'document-element-form.component.html',
    styleUrls: ['document-element-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DocumentElementFormComponent implements OnChanges, OnDestroy, BacklogElementForm<LocalBacklogElement> {

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
            typeId: [BacklogElementTypeId.DOCUMENT, Validators.required],
            title: [null, [Validators.required, Validators.min(50), Validators.max(255)]],
            description: [null, [Validators.required, Validators.min(50)]],
            content: [null, [Validators.required, Validators.min(200)]],
        });
    }

    get mediaType(): string {
        return (this.element && this.element.typeId) ? BacklogElementMediaType.get(this.element.typeId) : '*';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.element) {
            if (changes.element.currentValue.id) {
                this.formGroup.addControl('id', this.fb.control(this.element.id, [Validators.required]));
            }
            this.formGroup.patchValue(changes.element.currentValue);
        }
    }

    ngOnDestroy(): void {

    }

    onSubmit(): void {

    }

    onCancel(): void {
        this.formGroup.reset();
        this.cancel.emit();
    }

    onValidate(): void {
        this.validate.emit(this.formGroup.value);
    }

    snapshot(): LocalBacklogElement {
        return this.formGroup.value;
    }

    valid(): boolean {
        return this.formGroup.valid;
    }

}