import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos;
  sort = false;
  filter;
  @Input() userId;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos() {
    this.http.get("todos?userId=" + this.userId).subscribe(res => {
      this.todos = res;
    });
  }
  changeCompleted(id, completed) {
    this.http.patch("todos/" + id, {completed: completed}).subscribe(res => {
      const todo = _.find(this.todos, {id: id});
      todo.completed = res['completed'];
    });  
  }
}
