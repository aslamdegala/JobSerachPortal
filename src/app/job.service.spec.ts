import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { JobService } from './job.service';

describe('JobService', () => {
  let service: JobService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],

      providers: [JobService],
    });
    service = TestBed.inject(JobService);
  });
  let data = {
    companyName: 'TCS',
    experience: 2,
    isDeleted: false,
    jobDescription: 'good Job',
    jobId: 1059,
    jobLocation: 'Chennai',
    jobTitle: 'jr Developer',
    jobType: 'Free Lancer',
    salary: 400000,
    skill: 'Dot net, java',
    user: null,
    userId: 5002,
  };

  /**   it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('getting all jobs', () => {
    service.getAllJobs().subscribe((value) => {
      expect(value).toBeTruthy();
    });
  });

  it('getting Job By Id ', () => {
    service.getJobById(1059).subscribe((value) => {
      expect(value).toEqual(data);
    });
  });
  it('getting Searched  jobs', () => {
    service.GetSearchedJobs(data, '-1', 1).subscribe((value) => {
      expect(value).toEqual(data);
    });
  });
  it('getting  jobs length', () => {
    service.GetSearchedJobslength(data).subscribe((value) => {
      expect(value).toBeGreaterThan(0);
    });
  });*/
});
