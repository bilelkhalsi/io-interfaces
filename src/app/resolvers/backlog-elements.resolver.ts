import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElements } from '@io/model';
import { Observable } from 'rxjs';



export class BacklogElementsResolver implements Resolve<BacklogElements> {

    constructor(private backlogFacade: BacklogFacade) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BacklogElements> {
        return this.backlogFacade.getUserElements();
    }
}