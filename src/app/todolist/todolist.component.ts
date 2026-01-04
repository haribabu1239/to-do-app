import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  constructor(public todoService: TodoService) {}

  ngOnInit(): void {}

  removeElement(id: number): void {
    this.todoService.removeTodo(id);
  }

}
