import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-support',
    templateUrl: 'support.component.html',
    styleUrls: ['support.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SupportComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}