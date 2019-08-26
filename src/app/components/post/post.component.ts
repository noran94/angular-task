import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  post;
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.http.get("posts/" + id).subscribe(res => {
      this.post = res;
    });

  }

}
