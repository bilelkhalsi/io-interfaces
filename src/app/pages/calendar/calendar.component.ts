import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['calendar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalendarComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}