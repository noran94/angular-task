import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user;
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.http.get("users/" + id).subscribe(res => {
      this.user = res;
    });

  }


}
