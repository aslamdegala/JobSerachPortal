import { Component, OnInit } from '@angular/core';
import { JobService } from '../job.service';

import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-search-job',
  templateUrl: './search-job.component.html',
  styleUrls: ['./search-job.component.css'],
})
export class SearchJobComponent implements OnInit {
  Jobs: any;
  contentArray: any;
  returnedArray: any;
  jobType = '';
  jobTitle = '';
  sortdata: any = '';
  searchText: string = '';
  sorting: any = '-1';
  nameSearch: string = '';
  count: any;
  public filterdata = '';
  pages: any;
  flag = false;
  len: any;
  constructor(private jobService: JobService) {
    /*** this.jobService.getAllJobs().subscribe((data) => {
      console.warn(data);
      this.Jobs = data;
      if (this.Jobs.length === 0) {
        this.flag = true;
      }
    });**/
  }
  childData: any = {
    jobType: '',
    jobTitle: '',
    jobLocation: '',
    salary: '',
    skill: '',
  };
  Parent(data: any) {
    this.childData = data;
    console.log(this.childData);
    this.jobService
      .GetSearchedJobs(this.childData, this.sorting)
      .subscribe((result) => {
        this.Jobs = result;
        this.len = this.Jobs.length;
        this.flagStatus();
        console.log(result);
      });

    this.jobService
      .GetSearchedJobslength(this.childData)
      .subscribe((result) => {
        this.count = result;

        this.pages = (this.count * 10) / 6;
      });
  }

  pageChanged(event: PageChangedEvent) {
    this.jobService
      .GetSearchedJobs(this.childData, this.sorting, event.page)
      .subscribe((result) => {
        this.Jobs = result;
        this.flagStatus();
      });
  }

  ngOnInit(): void {
    this.jobService
      .GetSearchedJobs(this.childData, this.sorting)
      .subscribe((result) => {
        this.Jobs = result;
        this.len = this.Jobs.length;
        this.flagStatus();
        console.log(result);
      });

    this.jobService
      .GetSearchedJobslength(this.childData)
      .subscribe((result) => {
        this.count = result;

        this.pages = (this.count * 10) / 6;
      });
  }

  flagStatus() {
    if (this.len === 0) {
      this.flag = true;
    }
    if (this.len >= 1) {
      this.flag = false;
    }
  }
}
