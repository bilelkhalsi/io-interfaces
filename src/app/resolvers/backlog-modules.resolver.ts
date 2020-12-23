import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementModules } from '@io/model';
import { Observable } from 'rxjs';

export class BacklogModulesResolver implements Resolve<BacklogElementModules> {

    constructor(private backlogFacade: BacklogFacade) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BacklogElementModules> {
        return this.backlogFacade.getUserModules();
    }
}