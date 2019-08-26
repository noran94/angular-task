import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  loggedIn;
  constructor(private router:Router) { }

  ngOnInit() {
    this.loggedIn = localStorage.getItem("user");
  }
  logout(){
    localStorage.removeItem('user');
    this.loggedIn = localStorage.getItem("user");
    this.router.navigate(['/']);
  }

}
