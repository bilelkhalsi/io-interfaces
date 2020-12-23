import { Locale } from "./locale.model";
import { Scope } from "./scope.model";

export interface User {
    email: string;
    firstname: string;
    lastname: string;
    locale: Locale;
    scopes: Scope[];
}