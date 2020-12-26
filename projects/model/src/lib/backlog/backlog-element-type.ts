import {ElementType} from '../common/element-type';

export declare type BacklogElementTypes = BacklogElementType[];

export interface BacklogElementType {
    id: number;
    code: ElementType;
}

export const BacklogElementMediaType: Map<ElementType, string> = new Map([
    [ElementType.DOCUMENT, 'text/markdown, text/plain, text/xml, text/html, application/pdf'],
    [ElementType.AUDIO, 'audio/webm, audio/wave, audio/wav, audio/x-wav, audio/x-pn-wav'],
    [ElementType.IMAGE, 'image/jpeg, image/png'],
    [ElementType.VIDEO, 'video/mp4, video/webm']
]);
