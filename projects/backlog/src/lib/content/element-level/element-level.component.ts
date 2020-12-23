import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Level } from '@io/model';

@Component({
    selector: 'io-element-level',
    template: `
    <span *ngIf="level" [matTooltip]="level.description">
        {{level.code}}
    </span>`,
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ElementLevelComponent {

    @Input()
    level: Level;
}