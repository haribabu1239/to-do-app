import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList = [
    {id: 1, task: 'Task 1'},
    {id: 2, task: 'Task 2'},
    {id: 3, task: 'Task 3'}
  ];

  constructor() { }
  
  removeTodo(id: number): void {
    this.todoList = this.todoList.filter(todo => todo.id !== id);
  }
  addTodo(task: string): void {
    const newId = this.todoList.length > 0 ? Math.max(...this.todoList.map(t => t.id)) + 1 : 1;
    this.todoList.push({id: newId, task});
  }
}
