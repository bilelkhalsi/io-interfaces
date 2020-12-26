import { ElementLevel } from '../common/element-level';
import { BacklogElementType } from '../backlog/backlog-element-type';
import { User } from '../user/user.model';

export interface BacklogElementVM {
    id: number;
    title: string;
    description: string;
    creationDate: Date;
    level: ElementLevel;
    user: User;
    type: BacklogElementType;
    metadata: Map<string, string>;
}

export declare type BacklogElementsVM = BacklogElementVM[];  