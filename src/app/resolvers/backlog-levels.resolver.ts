import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { Levels } from '@io/model';
import { Observable } from 'rxjs';



export class BacklogLevelsResoler implements Resolve<Levels> {

    constructor(private backlogFacade: BacklogFacade) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Levels> {
        return this.backlogFacade.loadBacklogLavels();
    }
}