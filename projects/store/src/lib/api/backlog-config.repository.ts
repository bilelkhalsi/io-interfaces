import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { BacklogConfigState } from '../config/backlog/backlog-config.state';
import { BacklogConfig } from '@io/model';


@Injectable({ providedIn: 'root' })
export class BacklogConfigRepository {

    @Select(BacklogConfigState.config) backlogConfig$: Observable<BacklogConfig>;

    constructor(private store: Store) { }

}