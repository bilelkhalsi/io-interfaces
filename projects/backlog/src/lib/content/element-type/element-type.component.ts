import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { BacklogElementType } from '@io/model';

@Component({
    selector: 'io-element-type',
    template: `
    <span *ngIf="type">
            {{ type.code }}
    </span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementTypeComponent {

    @Input()
    type: BacklogElementType;
}
