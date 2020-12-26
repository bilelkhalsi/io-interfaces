import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BacklogElementTypeId, ElementType, Levels, RemoteBacklogElement } from '@io/model';
import { BacklogElementMediaType } from '@io/model/backlog/backlog-element-type';
import { FileValidator } from 'ngx-material-file-input';
import { BacklogElementForm } from '../backlog-element-form';

@Component({
    selector: 'io-audio-element-form',
    templateUrl: 'audio-element-form.component.html',
    styleUrls: ['audio-element-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AudioElementFormComponent implements OnChanges, BacklogElementForm<RemoteBacklogElement> {

    @Input()
    public levels: Levels;

    @Input()
    public element: RemoteBacklogElement;

    @Output()
    public validate: EventEmitter<RemoteBacklogElement> = new EventEmitter();

    @Output()
    public cancel: EventEmitter<any> = new EventEmitter();

    public formGroup: FormGroup;

    constructor(private fb: FormBuilder) {
        this.formGroup = this.fb.group({
            levelId: [null, Validators.required],
            typeId: [BacklogElementTypeId.IMAGE, [Validators.required]],
            title: [null, [Validators.required, Validators.min(50), Validators.max(255)]],
            description: [null, [Validators.required, Validators.min(50)]],
            content: [undefined, [Validators.required, FileValidator.maxContentSize(104857600)]],
            transcription: [null],
        });
    }

    get mediaType(): string {
        return BacklogElementMediaType.get(ElementType.AUDIO) || '*';
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.element && changes.element.currentValue) {
            const currentValue : RemoteBacklogElement = changes.element.currentValue;
            if (changes.element.currentValue.id) {
                this.formGroup.removeControl('content');
                this.formGroup.addControl('id', this.fb.control(currentValue.id, [Validators.required]));
                this.formGroup.addControl('url', this.fb.control(currentValue.url, [Validators.required]));
            }
            this.formGroup.patchValue(currentValue);
        }
    }

    onCancel(): void {
        this.formGroup.reset();
        this.cancel.emit();
    }

    onSubmit(): void {
        this.validate.emit(this.formGroup.value);
    }

}