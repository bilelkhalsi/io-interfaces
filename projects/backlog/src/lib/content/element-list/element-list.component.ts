import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { mapElementTypeIdToTypeCode } from '@io/core';
import { BacklogElement } from '@io/model';
import { BacklogElementsVM } from '@io/model/vm/backlog-element';
import { Observable, Subject, BehaviorSubject } from 'rxjs';


const HEADER_COLUMNS = ['header', 'add'];
const BACKLOG_ELEMENT_COLUMNS = ['type', 'level', 'title', 'created', 'actions'];
const BACKLOG_PLACEHOLDER_COLUMN = ['placeholder'];

@Component({
  selector: 'io-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogElementListComponent implements OnChanges, OnDestroy {

  private readonly onDestroy$ = new Subject();
  private readonly tableColumnsSubject = new BehaviorSubject<string[]>(BACKLOG_PLACEHOLDER_COLUMN);

  @Input()
  public elements: BacklogElementsVM;
  
  @Output()
  public add = new EventEmitter<void>();

  @Output()
  public delete = new EventEmitter<BacklogElement>();

  public tableColumns$: Observable<string[]>;

  public dataSource = new MatTableDataSource<BacklogElement>([]);

  public columns = BACKLOG_PLACEHOLDER_COLUMN;

  @HostBinding('class')
  private clazz = 'io-element-list';

  constructor(private cd: ChangeDetectorRef) {
      this.tableColumns$ = this.tableColumnsSubject.asObservable();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes.elements) {
      // update elements datasource
      const currentValue = changes.elements.currentValue;
      this.dataSource.data=currentValue;
      if (!!currentValue.length) {
        this.tableColumnsSubject.next(BACKLOG_ELEMENT_COLUMNS);
      }
    }

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
    this.tableColumnsSubject.complete();
  }

  editElement(element: BacklogElement): void {
    const type = mapElementTypeIdToTypeCode(element.typeId);
    if (type) {
      // this.router.navigate(['mybacklog', 'element', 'edit', type.toLowerCase(), element.id]);
    }
  }

  deleteElement(element: BacklogElement): void {
    // TODO : Fire event instead
   /* this.dialogService.openWarningDialog('backlog.element-list.action.delete-warning')
      .afterClosed().pipe(
        take(1),
        switchMap(response => iif(
          () => !!response,
          this.backlogFacade.deleteBacklogElement(element),
          of()
        )),
        take(1)
      ).subscribe();
      */
  }

  viewElement(element: BacklogElement): void {
    const type = mapElementTypeIdToTypeCode(element.typeId);
    if (type) {
      // this.router.navigate(['mybacklog', 'element', type.toLowerCase(), element.id]);
    }
  }

  elementDropped(event: CdkDragDrop<BacklogElement>): void {
    if (event.previousContainer === event.container) {
      // move element within module
      // this.backlogFacade.moveBacklogElementWithinModule(event.previousIndex, event.currentIndex);
    } else {
      // add new element to module
      // this.backlogFacade.moveModuleElmentToBacklog(event.previousIndex, event.currentIndex);
    }

  }

  stopPropagation($event: Event): void {
    $event.stopPropagation();
  }
}
