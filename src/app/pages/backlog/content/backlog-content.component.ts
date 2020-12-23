import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-backlog-content',
    templateUrl: 'backlog-content.component.html',
    styleUrls: ['backlog-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogContentComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}