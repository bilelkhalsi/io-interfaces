import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { User } from '@io/model';

@Component({
    selector: 'md-admin-navbar',
    templateUrl: 'admin-navbar.component.html',
    styleUrls: ['admin-navbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminNavBarComponent {
    
    @Input()
    public user: User;

    @Output()
    public login = new EventEmitter<void>();

    @Output()
    public logout = new EventEmitter<void>();

}
