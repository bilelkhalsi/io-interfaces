import { BacklogElementTypeCode, BacklogElementTypeId } from '@io/model';

const elementTypeIdCodeMap = new Map([
    [BacklogElementTypeId.DOCUMENT, BacklogElementTypeCode.DOCUMENT],
    [BacklogElementTypeId.IMAGE, BacklogElementTypeCode.IMAGE],
    [BacklogElementTypeId.AUDIO, BacklogElementTypeCode.AUDIO],
    [BacklogElementTypeId.VIDEO, BacklogElementTypeCode.VIDEO]
]);

export function mapElementTypeIdToTypeCode(typeId: BacklogElementTypeId): string {
    return elementTypeIdCodeMap.get(typeId);
}
