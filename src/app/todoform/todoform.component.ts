import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoform',
  templateUrl: './todoform.component.html',
  styleUrls: ['./todoform.component.css']
})
export class TodoformComponent implements OnInit {
  newTask: string = "";

  constructor(private ts:TodoService) { }

  ngOnInit(): void {
  }
  addTask(){
    console.log('inside addtask', this.newTask);
    this.ts.addTodo(this.newTask);
    this.resetForm();

  }
  resetForm(){
    this.newTask = "";
  }
}
