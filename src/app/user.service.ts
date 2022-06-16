import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private router: Router) {}
  token = localStorage.getItem('Authorization');
  isLoggedIn = this.token == null || this.token == '' ? false : true;

  AddUser(Userdata: any) {
    console.warn(Userdata);
    return this.http.post(
      'https://localhost:44383/api/User/Register',
      Userdata
    );
  }
  Id: any = '';
  UpdateUser(Userdata: any) {
    console.warn(Userdata);
    this.Id = this.getUserId();

    console.warn(this.Id);
    return this.http.put(
      'https://localhost:44383/api/User/UpdateUserDetails?UserId=' + this.Id,
      Userdata
    );
  }

  LoginAgent(res: any, agent: string) {
    localStorage.setItem('Authorization', res.access_token);
    console.log(res.access_token);
    localStorage.setItem('Role', res.role);
    localStorage.setItem('UserName', res.userName);
    localStorage.setItem('UserId', res.userId);

    localStorage.setItem('UserEmail', res.email);

    console.warn(res.access_token);
    this.isLoggedIn = true;
    this.router.navigate(['/Home']);
  }

  Authenticate(logincredential: User) {
    return this.http.post<any>(
      'https://localhost:44383/api/User/Login',
      logincredential
    );
  }

  getRole() {
    if (localStorage.getItem('Role')) {
      return localStorage.getItem('Role');
    }
    return 'NotLoggedIN';
  }
  getUserName() {
    if (localStorage.getItem('UserName')) {
      return localStorage.getItem('UserName');
    }
    return 'NotLoggedIN';
  }
  getUserId() {
    if (localStorage.getItem('UserId')) {
      return localStorage.getItem('UserId');
    }
    return 'NotLoggedIN';
  }
  isloggedInCheack() {
    return this.isLoggedIn;
  }
  Logout() {
    localStorage.removeItem('Authorization');

    this.isLoggedIn = false;
    this.router.navigate(['']);
  }
}
