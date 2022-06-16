import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
@Component({
  selector: 'app-view-jobs',
  templateUrl: './view-jobs.component.html',
  styleUrls: ['./view-jobs.component.css'],
})
export class ViewJobsComponent implements OnInit {
  public jobId: any;
  jobs: any;
  data1: any;

  constructor(private route: ActivatedRoute, private jobService: JobService) {
    let id = this.route.snapshot.paramMap.get('id');
    this.jobId = id;
    this.getjob();
  }

  ngOnInit(): void {}

  getjob() {
    this.jobService.getJobById(this.jobId).subscribe((data) => {
      console.warn(data);
      this.jobs = data;
      console.log(this.jobs);
    });
  }
}
