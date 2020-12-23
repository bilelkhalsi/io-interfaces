import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-element-preview',
    templateUrl: 'element-preview.component.html',
    styleUrls: ['element-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ElementPreviewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}