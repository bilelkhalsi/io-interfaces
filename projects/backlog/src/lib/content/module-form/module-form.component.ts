import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElement, BacklogElementModule, Level } from '@io/model';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { NotificationService } from '../../../../common/notification/notification.service';

const MODULE_ELEMENT_COLUMNS = ['type', 'level', 'title', 'created', 'actions'];


@Component({
    selector: 'io-module-form',
    templateUrl: 'module-form.component.html',
    styleUrls: ['module-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModuleFormComponent implements OnInit, OnDestroy {

    @HostBinding('class')
    clazz = 'io-module-form';

    private readonly onDestroy$ = new Subject();
    public readonly moduleElementColumns = MODULE_ELEMENT_COLUMNS;
    public dataSource = new MatTableDataSource<BacklogElement>([]);
    public module$: Observable<BacklogElementModule>;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        // private notificationService: NotificationService,
        private translate: TranslateService,
        public backlogFacade: BacklogFacade) {
    }

    ngOnInit(): void {
        this.module$ = this.backlogFacade.currentModule$.pipe(
            tap(module => this.dataSource.data = module.elements)
        );
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    elementLevel(levelId: number): Observable<Level> {
        return this.backlogFacade.getLevelById(levelId);
    }

    elementDropped(event: CdkDragDrop<BacklogElement>): void {
        const element = event.item.data;
        if (event.previousContainer === event.container) {
            // move element within module
            this.backlogFacade.moveModuleElement(event.previousIndex, event.currentIndex);
        } else {
            // add new element to module
            this.backlogFacade.addModuleElement(element, event.currentIndex).subscribe();
        }
    }

    deleteElement(element: BacklogElement): void {
        this.backlogFacade.deleteModuleElement(element).subscribe();
    }

    titleChanged(event: Event): void {
        const target: any = event.target;
        this.backlogFacade.setModuleTitle(target.value);
    }

    saveModule(module: BacklogElementModule): void {
        /*
        TODO: Fire event instead
        this.backlogFacade.saveModule(module).pipe(
            takeUntil(this.onDestroy$)
        ).subscribe(savedModule => {
            if (module.id) {
                this.notificationService.info('backlog.module-form.notification.updated');
            } else {
                this.notificationService.info('backlog.module-form.notification.created');
            }
        }, (error) => {
            this.notificationService.error('backlog.module-form.notification.fealed');
        });
        */
    }

    cancel(): void {
        // TODO : reset backlog state and set current module to null!!
        this.router.navigate(['mybacklog']);
    }

}
