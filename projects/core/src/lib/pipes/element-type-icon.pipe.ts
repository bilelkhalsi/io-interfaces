import { Pipe, PipeTransform } from '@angular/core';
import { BacklogElementTypeId } from '@io/model';

@Pipe({
    name: 'typeIcon'
})
export class ElementTypeIconPipe implements PipeTransform {
    transform(typeId: BacklogElementTypeId): any {
        switch (typeId) {
            case BacklogElementTypeId.AUDIO:
                return 'headset';
            case BacklogElementTypeId.VIDEO:
                return 'videocam';
            case BacklogElementTypeId.IMAGE:
                return 'photo';
            case BacklogElementTypeId.DOCUMENT:
                return 'description';
            default:
                return 'attach_file';
        }
    }
}