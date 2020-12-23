import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SecurityService } from '@io/core/security';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let securityServiceSpy:  jasmine.SpyObj<SecurityService>; 
  let translateSpy: jasmine.SpyObj<TranslateService>;
  beforeEach(async () => {
    securityServiceSpy = jasmine.createSpyObj('SecurityService', ['configureOAuthCodeFlow', 'connectedUser']);
    translateSpy = jasmine.createSpyObj('TranslateService', ['setDefaultLang', 'use']);
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [{
        provide: SecurityService,
        useValue: securityServiceSpy
      }, {
        provide: TranslateService,
        useValue: translateSpy
      }]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render navbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('md-admin-navbar')).toBeDefined()
  });
});
