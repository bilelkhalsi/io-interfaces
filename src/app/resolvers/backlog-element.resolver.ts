import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { BacklogFacade } from '@io/core/service';
import { BacklogElement } from '@io/model';
import { Observable, of } from 'rxjs';


export class BacklogElementResolver implements Resolve<BacklogElement> {

    constructor(private backlogService: BacklogFacade) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<BacklogElement> {
        const id = Number(route.paramMap.get('id'));
        return !!id ? this.backlogService.getElementById(id) : of();
    }
}