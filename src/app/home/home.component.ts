import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  Role: string | null = '';
  constructor(private userService: UserService) {
    this.Role = this.userService.getRole();
    console.log(this.Role);
  }

  ngOnInit(): void {}
}
