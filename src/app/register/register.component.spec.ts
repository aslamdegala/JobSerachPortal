import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserService } from '../user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

import { RegisterComponent } from './register.component';
import { By } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  button: HTMLElement;
  http: HttpClient;
  let user = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([]),
        FormsModule,
      ],
      declarations: [RegisterComponent],
      providers: [UserService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should Contains the Button Text Register when not Logged in', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.reg'));
    let el: HTMLElement = de.nativeElement;

    if (component.LoggedInCheack == false) {
      expect(el.innerText).toContain('Register');
    }
  });

  xit('it should Contains the Button Text Update when it is Logged in', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.upd'));
    let el: HTMLElement = de.nativeElement;
    if (component.LoggedInCheack == true) {
      expect(el.innerText).toContain('Update');
    }
  });

  xit('it Show the Message when we click Register or update', () => {
    fixture.detectChanges();
    let de = fixture.debugElement.query(By.css('.upd'));
    let el: HTMLElement = de.nativeElement;
    if (component.errMsg.length > 0) {
      expect(el.innerText).toBeTruthy();
    }
  });

  it('it should call the register Method', () => {
    expect(component.RegisterUser(component.user)).toBeUndefined();
  });
});
