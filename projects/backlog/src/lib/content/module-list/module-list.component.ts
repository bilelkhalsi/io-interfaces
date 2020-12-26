import { Component, HostBinding, Input, OnDestroy, OnChanges, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementModule, BacklogElementModules } from '@io/model';
import { BehaviorSubject, iif, Observable, of, Subject } from 'rxjs';
import { map, startWith, switchMap, take, tap } from 'rxjs/operators';
//import { DialogService } from '../../../../common/dialog/dialog.service';
//import { NotificationService } from '../../../../common/notification/notification.service';

const BACKLOG_MODULE_COLUMNS = ['title', 'created', 'actions'];
const MODULE_PLACEHOLDER_COLUMNS = ['placeholder'];

@Component({
    selector: 'io-module-list',
    templateUrl: './module-list.component.html',
    styleUrls: ['./module-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogModuleListComponent implements OnChanges, OnDestroy {

    private readonly onDestroy$ = new Subject();
    private readonly tableColumnsSubject = new BehaviorSubject<string[]>(MODULE_PLACEHOLDER_COLUMNS);

    public tableColumns$: Observable<string[]>;
    
    @Input()
    public modules: BacklogElementModules;
    public dataSource = new MatTableDataSource<BacklogElementModule>([]);

    @HostBinding('class')
    private clazz = 'io-module-list';

    constructor() {
        this.tableColumns$= this.tableColumnsSubject.asObservable();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if ( changes && changes.modules) {
            const currentValue = changes.modules.currentValue;
            this.dataSource.data = currentValue;
            if (!!currentValue.length) {
                this.tableColumnsSubject.next(BACKLOG_MODULE_COLUMNS);
            }
        }
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
        this.tableColumnsSubject.complete();
    }

    onNewModuleClick(): void {
        // this.router.navigate(['mybacklog', 'module', 'new']);
    }

    modulePreview(module: BacklogElementModule): void {
        // this.router.navigate(['mybacklog', 'module', 'view', module.id]);
    }

    editModule(module: BacklogElementModule): void {
        // this.router.navigate(['mybacklog', 'module', 'edit', module.id]);
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
