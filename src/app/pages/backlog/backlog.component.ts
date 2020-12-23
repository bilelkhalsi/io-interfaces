import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BacklogElementTypeCode } from '@io/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'io-backlog',
    templateUrl: 'backlog.component.html',
    styleUrls: ['backlog.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BacklogComponent implements OnInit {

    public elementTypeCode$: Observable<BacklogElementTypeCode>;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() { 
        this.elementTypeCode$ = this.route.data.pipe(
            map(data => data.type as BacklogElementTypeCode)
        );
    }
}