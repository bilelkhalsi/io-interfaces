import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'io-lives',
    templateUrl: 'lives.component.html',
    styleUrls: ['lives.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class LivesComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}