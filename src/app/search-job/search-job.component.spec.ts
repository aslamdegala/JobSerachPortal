import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JobService } from '../job.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { SearchJobComponent } from './search-job.component';

describe('SearchJobComponent', () => {
  let component: SearchJobComponent;
  let fixture: ComponentFixture<SearchJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchJobComponent],
      providers: [JobService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('testing falsg status', () => {
    component.flagStatus();

    expect(component.flag).toBeFalsy();
  });

  it('it should dispaly the Jobs not found when No Jobs', () => {
    if (component.len === 0) {
      expect(component.flag).toBeTruthy();
    }
  });
  it('it should dispaly the Jobs when Jobs are found', () => {
    if (component.len >= 1) {
      expect(component.flag).toBeFalsy();
    }
  });

  it('it should call the job searched length', () => {
    const spy = spyOn(component, 'ngOnInit');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
});
