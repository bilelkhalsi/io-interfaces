import { BacklogElement } from '@io/model';

export interface BacklogElementFormDialog<T extends BacklogElement> {
    onSubmit(T): void;
    onCancel(): void;
}