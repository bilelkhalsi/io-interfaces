import { BacklogElements } from './element.model';

export declare type BacklogElementModules = BacklogElementModule[];

export interface BacklogElementModule {
    id?: number; // generated by the backend
    title: string;
    creationDate?: Date; // could be generated
    elements: BacklogElements;
}