import { produce } from 'immer';

export function addItemToArray<T>(element: T, index?: number): (array: Array<T>) => Array<T> {
    return produce<any>((draft: Array<T>) => {
        const lastIndex = draft.length;
        const idx = index !== undefined ? index : lastIndex;
        const position = clamp(idx, lastIndex);
        draft.splice(position, 0, element);
    });
}

export function replaceItemAt<T>(element: T, index: number): (array: Array<T>) => Array<T> {
    return produce<any>((draft: Array<T>) => {
        const lastIndex = draft.length;
        const idx = clamp(index, lastIndex);
        if (index === idx) { // 0 <= index < length
            draft.splice(idx, 1, element);
        }
    });
}


export function removeItemAt<T>(index: number): (array: Array<T>) => Array<T> {
    return produce<any>((draft: Array<T>) => {
        const idx = clamp(index, draft.length - 1);
        draft.splice(idx, 1);
    });
}


export function moveItemInArray<T>(fromIndex: number, toIndex: number): (array: Array<T>) => Array<T> {
    return produce<any>((draft: Array<T>) => {
        const from = clamp(fromIndex, draft.length - 1);
        const to = clamp(toIndex, draft.length - 1);
        if (from === to) {
            return;
        }
        const target = draft[from];
        const delta = to < from ? -1 : 1;
        for (let i = from; i !== to; i += delta) {
            draft[i] = draft[i + delta];
        }
        draft[to] = target;
    });
}


/** Clamps a number between zero and a maximum. */
function clamp(value: number, max: number): number {
    return Math.max(0, Math.min(max, value));
}
