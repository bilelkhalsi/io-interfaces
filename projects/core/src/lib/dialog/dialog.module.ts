import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TranslateModule } from '@ngx-translate/core';
import { DialogInfoComponent } from './dialog-info.component';
import { DialogWarningComponent } from './dialog-warning.component';


@NgModule({
    imports: [TranslateModule, MatDialogModule, MatButtonModule],
    exports: [MatDialogModule],
    declarations: [DialogWarningComponent, DialogInfoComponent],
    entryComponents: [DialogWarningComponent, DialogInfoComponent]
})
export class DialogModule {

    constructor(@Optional() @SkipSelf() parentModule?: DialogModule) {
        if (parentModule) {
            throw new Error(
                'DialogModule is already loaded. Import it in the AppModule only');
        }
    }

}
