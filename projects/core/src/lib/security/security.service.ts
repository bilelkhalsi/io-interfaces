import { Injectable } from "@angular/core";
import { Environment } from "../env/environment.model";
import { User, Scope } from "@io/model";
import { OAuthService } from "angular-oauth2-oidc";
import { authCodeFlowConfig } from "./security.config";

function mapClaimsToUser(claims: Object): User {
    return {
        email: claims['email'],
        firstname: claims['given_name'],
        lastname: claims['family_name'],
        locale: claims['locale'],
        scopes: []
    }
}

function parseGrantedScopes(scopes: any): Scope[] {
    if (scopes instanceof Array) {
        return scopes;
    }
    if (typeof scopes === 'string') {
        return (scopes || '').split(' ').map(scope => scope as Scope);
    }
    return [];
}

@Injectable({
    providedIn: 'root'
})
export class SecurityService {

    constructor(private oauthService: OAuthService,
        private env: Environment) {

    }

    configureOAuthCodeFlow() {
        const config = {
            ...authCodeFlowConfig,
            showDebugInformation: !this.env.production,
            requireHttps: this.env.production
        }
        this.oauthService.configure(config);
        this.oauthService.loadDiscoveryDocumentAndTryLogin();
    }

    connectUser() {
        this.oauthService.initCodeFlow();
    }

    isConnected(): boolean {
        return this.oauthService.hasValidAccessToken();
    }

    connectedUser(): User {
        if (this.oauthService.hasValidAccessToken()) {
            const user = mapClaimsToUser(this.oauthService.getIdentityClaims());
            const scopes = parseGrantedScopes(this.oauthService.getGrantedScopes());
            return {
                ...user,
                scopes
            }
        }
        return null;
    }

}