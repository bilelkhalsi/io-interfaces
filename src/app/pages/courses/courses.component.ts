import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-courses',
    templateUrl: 'courses.component.html',
    styleUrls: ['courses.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursesComponent implements OnInit {

    constructor() { }

    ngOnInit() { }
}