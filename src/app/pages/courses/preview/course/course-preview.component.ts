import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-course-preview',
    templateUrl: 'course-preview.component.html',
    styleUrls: ['course-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CoursePreviewComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}