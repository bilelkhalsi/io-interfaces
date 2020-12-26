import { BacklogElement, ElementType } from '@io/model';
import { ElementLevels } from '@io/model/common/element-level';

export interface BacklogElementFormDialog<T extends BacklogElement> {
    onSubmit(T): void;
    onCancel(): void;
}

export interface ElementFormDialogData<T extends BacklogElement> {
    element: T;
    levels : ElementLevels;
    type: ElementType
}