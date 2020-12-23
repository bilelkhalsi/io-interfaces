import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[ioStopPropagation]' })
export class StopPropagationDirective {

    @HostListener('click', ['$event'])
    public onClick(event: Event): void {
        event.stopPropagation();
    }
}