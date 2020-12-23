import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { Subject } from 'rxjs';

const HEADER_COLUMNS = ['header', 'add'];
const BACKLOG_ELEMENT_COLUMNS = ['type', 'selection', 'level', 'title', 'creationDate', 'actions'];
const ELEMENT_MODULE_COLUMNS = ['title', 'creationDate', 'actions'];

const animations = [
  trigger('inOutAnimation', [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate('0.1s ease-out', style({ height: 200, opacity: 1 }))
    ]),
    transition(':leave', [
      style({ height: 200, opacity: 1 }),
      animate('0.2s ease-in', style({ height: 0, opacity: 0 }))
    ])
  ])
];

@Component({
  selector: 'io-backlog-content',
  templateUrl: './backlog-content.component.html',
  styleUrls: ['./backlog-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations
})
export class BacklogContentComponent implements OnInit, OnDestroy {

  @HostBinding('class') clazz = 'backlog-content';

  public readonly onDestroy$ = new Subject();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public backlogFacade: BacklogFacade) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
