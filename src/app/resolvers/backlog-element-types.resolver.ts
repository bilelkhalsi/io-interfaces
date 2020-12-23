import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementTypes } from '@io/model';
import { Observable } from 'rxjs';


export class BacklogElementTypesResoler implements Resolve<BacklogElementTypes> {

    constructor(private backlogFacade: BacklogFacade) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BacklogElementTypes> {
        return this.backlogFacade.loadBacklogElementTypes();
    }
}
