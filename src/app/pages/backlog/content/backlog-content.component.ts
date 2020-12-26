import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BacklogElement } from '@io/model/backlog/backlog-element';

@Component({
    selector: 'io-backlog-content',
    templateUrl: 'backlog-content.component.html',
    styleUrls: ['backlog-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogContentComponent implements OnInit {

    constructor() { }

    ngOnInit() { }


    saveElement(element: BacklogElement) {
        // TODO : call core service to save element
        console.log('todo: save element !', element);
    }
}