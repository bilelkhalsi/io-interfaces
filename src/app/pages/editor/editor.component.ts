import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-editor',
    templateUrl: 'editor.component.html',
    styleUrls: ['editor.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class EditorComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}