import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobService } from '../job.service';
import { UserService } from '../user.service';

import { RouterTestingModule } from '@angular/router/testing';

import { ViewJobsComponent } from './view-jobs.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
describe('ViewJobsComponent', () => {
  let component: ViewJobsComponent;
  let fixture: ComponentFixture<ViewJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
      declarations: [ViewJobsComponent],
      providers: [JobService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
