import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  constructor() {}

  jobType: any = '';
  jobTitle: any = '';
  jobLocation: any = '';
  salary: number = 0;
  skill: any = '';
  ngOnInit(): void {}
  @Output() data: any = new EventEmitter<any>();

  filter() {
    console.log(this.jobType);
    this.data.emit({
      jobType: this.jobType,
      jobTitle: this.jobTitle,
      jobLocation: this.jobLocation,
      salary: this.salary,
      skill: this.skill,
    });
  }
}
