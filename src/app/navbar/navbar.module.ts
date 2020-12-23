import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './navbar.component';
import { AdminNavBarComponent } from './admin-navbar.component';
import { RouterModule } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { TranslateModule } from '@ngx-translate/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule,
        MatButtonModule,
        MatMenuModule,
        MatIconModule
    ],
    declarations: [NavBarComponent, AdminNavBarComponent],
    exports: [NavBarComponent, AdminNavBarComponent]
})
export class NavBarModule {}