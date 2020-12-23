import { OAuthService } from "angular-oauth2-oidc";
import { testEnvironement } from "../env/environment.test";
import { SecurityService } from "./security.service";

describe('SecutiyService testing', () => {
    let sut: SecurityService;
    let oauthServiceSpy: jasmine.SpyObj<OAuthService>;

    beforeEach(() => {
      oauthServiceSpy = jasmine.createSpyObj('OAuthService', ['configure', 'loadDiscoveryDocumentAndTryLogin', 'initCodeFlow', 'getGrantedScopes']);
      sut = new SecurityService(oauthServiceSpy, testEnvironement);
    })
  
    it('#configureOAuthCodeFlow should set code flow and load idp configuration document', () => {
      sut.configureOAuthCodeFlow();
      expect(oauthServiceSpy.configure).toHaveBeenCalled();
      expect(oauthServiceSpy.loadDiscoveryDocumentAndTryLogin).toHaveBeenCalled();
    });
  
    it('#connectUser should trigger code flow authorization', () => {
        sut.connectUser();
        expect(oauthServiceSpy.initCodeFlow).toHaveBeenCalled();
    });

      
    it('#connectedUser should return connected user info and granted scopes', () => {
        oauthServiceSpy.getIdentityClaims.and.returnValue({email:'default_user@test.com'});
        oauthServiceSpy.getGrantedScopes.and.returnValue(['openid', 'profile']);
        const connectedUser = sut.connectedUser();
        expect(connectedUser.email).toBe('default_user@test.com');
    });
  });