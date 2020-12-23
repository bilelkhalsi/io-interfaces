import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElementModule } from '@io/model';
import { Observable } from 'rxjs';


export class BacklogModuleResolver implements Resolve<BacklogElementModule> {

    constructor(private backlogFacade: BacklogFacade) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BacklogElementModule> {
        const id = Number(route.paramMap.get('id'));
        return this.backlogFacade.getModuleById(id);
    }
}