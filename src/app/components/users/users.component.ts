import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users;
  filter;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnInit() {
    this.http.get("users").subscribe(res => {
      this.users = res
    });
  }
  getUserDetails(user) {
    this.router.navigate(['/user/' + user.id]);
  }

}
