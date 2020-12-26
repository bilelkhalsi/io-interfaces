import { EventEmitter } from '@angular/core';
import { BacklogElement, Levels } from '@io/model';

export interface BacklogElementForm<T extends BacklogElement> {

    levels: Levels;

    element: T;

    validate: EventEmitter<T>;

    cancel: EventEmitter<any>;
}