import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementModule, BacklogElementModules } from '@io/model';
import { iif, Observable, of, Subject } from 'rxjs';
import { map, startWith, switchMap, take, tap } from 'rxjs/operators';
//import { DialogService } from '../../../../common/dialog/dialog.service';
//import { NotificationService } from '../../../../common/notification/notification.service';


const HEADER_COLUMNS = ['header', 'add'];
const BACKLOG_MODULE_COLUMNS = ['title', 'created', 'actions'];
const MODULE_PLACEHOLDER_COLUMNS = ['placeholder'];

@Component({
    selector: 'io-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss']
})
export class BacklogModuleListComponent implements OnInit, OnDestroy {

    private readonly onDestroy$ = new Subject();
    public readonly headerColumns = HEADER_COLUMNS;

    public backlogModuleColumns$: Observable<string[]>;
    public modules$: Observable<BacklogElementModules>;
    public dataSource = new MatTableDataSource<BacklogElementModule>([]);

    @HostBinding('class')
    private clazz = 'io-module-list';

    constructor(
        private router: Router,
        // private dialogService: DialogService,
        // private notificationService: NotificationService,
        private backlogFacade: BacklogFacade) {

    }

    ngOnInit(): void {
        this.modules$ = this.backlogFacade.modules$.pipe(
            tap(modules => this.dataSource.data = modules)
        );
        this.backlogModuleColumns$ = this.backlogFacade.modules$.pipe(
            startWith([]),
            map(modules => modules.length ? BACKLOG_MODULE_COLUMNS : MODULE_PLACEHOLDER_COLUMNS)
        );
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }

    onNewModuleClick(): void {
        this.router.navigate(['mybacklog', 'module', 'new']);
    }

    modulePreview(module: BacklogElementModule): void {
        this.router.navigate(['mybacklog', 'module', 'view', module.id]);
    }

    editModule(module: BacklogElementModule): void {
        this.router.navigate(['mybacklog', 'module', 'edit', module.id]);
    }

    deleteModule(module: BacklogElementModule): void {
        /*
        TODO : Fire event instead
        this.dialogService.openWarningDialog('backlog.module-list.action.delete-warning')
            .afterClosed().pipe(
                take(1),
                switchMap(response => iif(
                    () => !!response,
                    this.backlogFacade.deleteModule(module),
                    of()
                )),
                take(1)
            ).subscribe();
            */
    }

}
