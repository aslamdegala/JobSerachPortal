import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JobService } from '../job.service';

@Component({
  selector: 'app-add-new-job',
  templateUrl: './add-new-job.component.html',
  styleUrls: ['./add-new-job.component.css'],
})
export class AddNewJobComponent implements OnInit {
  constructor(private jobService: JobService) {}

  errMsg: any = '';

  jobTypes: any = ['Full Time', 'Part Time', 'Remote', 'Free Lancer'];

  ngOnInit(): void {}

  formdata = new FormGroup({
    jobTitle: new FormControl(),
    companyName: new FormControl(),
    jobDescription: new FormControl(),
    jobLocation: new FormControl(),
    jobType: new FormControl(),
    experience: new FormControl(),
    salary: new FormControl(),
    skill: new FormControl(),
    isDeleted: new FormControl(false),
    userId: new FormControl(localStorage.getItem('UserId')),
  });
  AddJob() {
    console.warn(this.formdata.value);
    this.jobService.AddJob(this.formdata.value).subscribe(
      (result) => {
        console.warn(result);
        this.errMsg = 'Job Added Successfully ';
      },
      (err) => {
        console.log(err);
        this.errMsg = 'Please Fill the  Fields ';
      }
    );
  }
}
