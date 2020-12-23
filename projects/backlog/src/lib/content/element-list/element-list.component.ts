import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Level, BacklogElement, BacklogElements, BacklogElementType } from '@io/model';
import { mapElementTypeIdToTypeCode } from '@io/core';
// import { DialogService } from '../../../../common/dialog/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { BacklogFacade } from '@io/core/service';
import { iif, Observable, of, Subject } from 'rxjs';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { CdkDragDrop } from '@angular/cdk/drag-drop';


const HEADER_COLUMNS = ['header', 'add'];
const BACKLOG_ELEMENT_COLUMNS = ['type', 'level', 'title', 'created', 'actions'];
const BACKLOG_PLACEHOLDER_COLUMN = ['placeholder'];

@Component({
  selector: 'io-element-list',
  templateUrl: './element-list.component.html',
  styleUrls: ['./element-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BacklogElementListComponent implements OnInit, OnDestroy {

  private readonly onDestroy$ = new Subject();
  public readonly headerColumns = HEADER_COLUMNS;

  public elementColumns$: Observable<string[]>;
  public elements$: Observable<BacklogElements>;
  public dataSource = new MatTableDataSource<BacklogElement>([]);

  @HostBinding('class')
  private clazz = 'io-element-list';

  constructor(
    private router: Router,
    private translate: TranslateService,
    // private dialogService: DialogService,
    public backlogFacade: BacklogFacade) {
  }

  ngOnInit(): void {
    this.elements$ = this.backlogFacade.elements$.pipe(
      tap(elements => this.dataSource.data = elements)
    );
    this.elementColumns$ = this.backlogFacade.elements$.pipe(
      map(elements => elements.length ? BACKLOG_ELEMENT_COLUMNS : BACKLOG_PLACEHOLDER_COLUMN)
    )
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  elementType(typeId: number): Observable<BacklogElementType> {
    return this.backlogFacade.getTypeById(typeId);
  }

  elementLevel(levelId: number): Observable<Level> {
    return this.backlogFacade.getLevelById(levelId);
  }

  editElement(element: BacklogElement): void {
    const type = mapElementTypeIdToTypeCode(element.typeId);
    if (type) {
      this.router.navigate(['mybacklog', 'element', 'edit', type.toLowerCase(), element.id]);
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
      this.router.navigate(['mybacklog', 'element', type.toLowerCase(), element.id]);
    }
  }

  elementDropped(event: CdkDragDrop<BacklogElement>): void {
    if (event.previousContainer === event.container) {
      // move element within module
      this.backlogFacade.moveBacklogElementWithinModule(event.previousIndex, event.currentIndex);
    } else {
      // add new element to module
      this.backlogFacade.moveModuleElmentToBacklog(event.previousIndex, event.currentIndex);
    }

  }

  stopPropagation($event: Event): void {
    $event.stopPropagation();
  }
}
