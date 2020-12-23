import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementTypeCode } from '@io/model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'io-element-preview',
    templateUrl: 'element-preview.component.html',
    styleUrls: ['element-preview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ElementPreviewComponent implements OnInit {

    public readonly ELEMENT_TYPE = BacklogElementTypeCode;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public backlogFacade: BacklogFacade) { }

    ngOnInit(): void {

    }

    getElementTypeCode(typeId: number): Observable<BacklogElementTypeCode> {
        return this.backlogFacade.getTypeById(typeId).pipe(
            map(type => type.code)
        );
    }
}
