import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user;
  posts;
  toDos;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getUserPosts();
    this.getUserToDos();
  }
  getUserPosts() {
    this.http.get("posts/" + this.user.id).subscribe(res => {
      this.posts = res;
    });
  }
  getUserToDos() {
    this.http.get("todos/" + this.user.id).subscribe(res => {
      this.toDos = res;
    });
  }

}
