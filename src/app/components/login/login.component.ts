import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username;
  password;
  message;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }
onClickSubmit() {
    this.message = false;
    if (this.password !== this.username) {
      this.message = true;
      return;
    }
    this.http.get("users").subscribe(res => {
      const user = _.find(res, { username: this.username });
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/']);
      }
      this.message = true;
    });

  }

}
