import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private http: HttpClient) {}
  AddJob(JobData: any) {
    console.warn(JobData);
    console.warn(localStorage.getItem('Authorization'));
    return this.http.post('https://localhost:44383/api/Job/AddJob', JobData, {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('Authorization'),
      }),
    });
  }
  getAllJobs() {
    return this.http.get('https://localhost:44383/api/Job/Get');
  }
  getJobById(id: any) {
    return this.http.get('https://localhost:44383/api/Job/GetJob?Jobid=' + id);
  }
  GetSearchedJobs(data: any, sorting: any, pageno: any = 1) {
    var string = '?sort=' + sorting;

    if (data.jobTitle != '') string = string + '&JobTitle=' + data.jobTitle;

    if (data.jobLocation != '')
      string = string + '&Joblocation=' + data.jobLocation;

    if (data.jobType != 'Any') string = string + '&JobType=' + data.jobType;

    if (data.salary) string = string + '&salary=' + data.salary;

    if (data.skill != 'Any') string = string + '&skill=' + data.skill;

    string = string + '&pageno=' + pageno;

    return this.http.get(
      'https://localhost:44383/api/Job/GetSearchedJobs' + string
    );
  }
  GetSearchedJobslength(data: any) {
    var string = '?';
    if (data.jobTitle != '') string = string + '&JobTitle=' + data.jobTitle;

    if (data.jobLocation != '')
      string = string + '&Joblocation=' + data.jobLocation;

    if (data.jobType != 'Any') string = string + '&JobType=' + data.jobType;

    if (data.salary) string = string + '&salary=' + data.salary;

    if (data.skill != 'Any') string = string + '&skill=' + data.skill;

    return this.http.get(
      'https://localhost:44383/api/Job/NumberOfSearchedProperties' + string
    );
  }
}
