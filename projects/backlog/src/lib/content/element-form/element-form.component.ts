import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { mapElementTypeIdToTypeCode } from '@io/core';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementTypeCode, Levels, LocalBacklogElement, BacklogElement } from '@io/model';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
// import { NotificationService } from '../../../../common/notification/notification.service';

@Component({
    selector: 'io-element-form',
    templateUrl: 'element-form.component.html',
    styleUrls: ['element-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ElementFormComponent implements OnInit, OnDestroy {

    @Input()
    levels : Levels = []

    @Input()
    elementType : BacklogElementTypeCode;

    @Input()
    element: BacklogElement;

    public readonly ElementTypeCode = BacklogElementTypeCode;
    private readonly onDestroy$ = new Subject();
    public elementTypeCode$: Observable<BacklogElementTypeCode>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        // private notificationService: NotificationService,
        public backlogFacade: BacklogFacade) {

    }

    ngOnInit(): void {
       
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    cancel(): void {
        this.router.navigate(['mybacklog']);
    }

    saveBacklogElement(element: LocalBacklogElement): void {
        const type = mapElementTypeIdToTypeCode(element.typeId);
        this.backlogFacade.saveBacklogElement(element).pipe(
            takeUntil(this.onDestroy$)
        ).subscribe(savedElement => {
            // this.notificationService.info('backlog.element-form.notification.created');
            this.router.navigate(['mybacklog', type.toLowerCase(), savedElement.id]);
        }, (error) => {
            console.log('Error occured', error);
            // this.notificationService.error('backlog.element-form.notification.fealed');
        })
    }
}