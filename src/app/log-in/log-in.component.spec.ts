import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from 'src/User';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LogInComponent } from './log-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let router: Router;
  let service: UserService;
  let http: HttpClient;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
  const user = {
    UserName: '',
    Password: '',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      declarations: [LogInComponent],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    service = new UserService(http, router);

    component = new LogInComponent(service);
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('rediect to home page', () => {
    let router = TestBed.get(Router);
    let spy = spyOn(router, 'navigate');
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(['Home']);
  });
  it('it should call the Onsubmit', () => {
    //.onSubmit();
    const spy = spyOn(component, 'onSubmit');
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
    //  expect(component.onSubmit()).toHaveBeenCalled();
  });

  /* it('it should call the Authetication', () => {
    component.onSubmit();
    expect(service.Authenticate(user)).toHaveBeenCalled();
  });**/
});
