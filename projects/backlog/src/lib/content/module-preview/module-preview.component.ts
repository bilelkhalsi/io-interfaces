import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'io-module-preview',
    templateUrl: 'module-preview.component.html',
    styleUrls: ['module-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModulePreviewComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
