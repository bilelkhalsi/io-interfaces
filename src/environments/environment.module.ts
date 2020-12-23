import { NgModule } from "@angular/core";
import { Environment } from "@io/core";
import { environment } from './environment';


@NgModule({
    providers: [{ provide: Environment, useValue: environment, multi: false}]
})
export class EnvironmentModule {

}