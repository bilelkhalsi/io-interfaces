import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule } from '@ngx-translate/core';
import { ErrorNotificationComponent } from './error-notification.component';
import { InfoNotificationComponent } from './info-notification.component';


@NgModule({
    imports: [TranslateModule, MatSnackBarModule, MatButtonModule],
    exports: [MatSnackBarModule],
    declarations: [InfoNotificationComponent, ErrorNotificationComponent],
    entryComponents: [InfoNotificationComponent, ErrorNotificationComponent]
})
export class NotificationModule {

    constructor(@Optional() @SkipSelf() parentModule?: NotificationModule) {
        if (parentModule) {
            throw new Error(
                'NotificationModule is already loaded. Import it in the AppModule only');
        }
    }

}
