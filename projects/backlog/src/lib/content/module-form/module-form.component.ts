import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { BacklogElement, BacklogElementModule } from '@io/model';
import { Subject } from 'rxjs';
// import { NotificationService } from '../../../../common/notification/notification.service';

const MODULE_ELEMENT_COLUMNS = ['type', 'level', 'title', 'created', 'actions'];


@Component({
    selector: 'io-module-form',
    templateUrl: 'module-form.component.html',
    styleUrls: ['module-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogModuleFormComponent implements OnInit, OnDestroy {
/* 
    @HostBinding('class')
    clazz = 'io-module-form'; */

    private readonly onDestroy$ = new Subject();
   

    constructor() {
    }

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }


    elementDropped(event: CdkDragDrop<BacklogElement>): void {
        const element = event.item.data;
        if (event.previousContainer === event.container) {
            // move element within module
//             this.backlogFacade.moveModuleElement(event.previousIndex, event.currentIndex);
        } else {
            // add new element to module
   //          this.backlogFacade.addModuleElement(element, event.currentIndex).subscribe();
        }
    }

    deleteElement(element: BacklogElement): void {
 //       this.backlogFacade.deleteModuleElement(element).subscribe();
    }

    titleChanged(event: Event): void {
        const target: any = event.target;
   //     this.backlogFacade.setModuleTitle(target.value);
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
//        this.router.navigate(['mybacklog']);
    }

}
