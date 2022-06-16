import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from 'src/User';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent implements OnInit {
  constructor(private userService: UserService) {}
  user: User = {
    UserName: '',
    Password: '',
  };
  ngOnInit(): void {}
  errMsg = '';
  result: any;
  onSubmit() {
    this.userService.Authenticate(this.user).subscribe(
      (res) => {
        this.userService.LoginAgent(res, this.user.UserName);
        console.warn(res);
        this.result = res;
      },
      (err) => {
        console.log(err);
        this.errMsg = 'Username or Password is Incorrect';
      }
    );
  }
}
