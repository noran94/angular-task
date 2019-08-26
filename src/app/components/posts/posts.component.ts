import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;
  filter;
  @Input() userId;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    const url = this.userId ? "posts?userId=" + this.userId : "posts";
    this.http.get(url).subscribe(res => {
      this.posts = res;
    });
  }
  getPostDetails(post) {
    this.router.navigate(['/post/' + post.id]);
  }
}
