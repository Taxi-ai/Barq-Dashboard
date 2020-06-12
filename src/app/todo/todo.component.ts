import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: ToDo[] = [{ _id: '23dsd32', checked: true, content: 'Play football' }];

  constructor() { }

  ngOnInit() {
  }

  submitTodo(todoForm: NgForm) {
    console.log(todoForm.value);
    if (todoForm.invalid) {
      return;
    }

    this.todoList.push({ _id: '69sadsad', checked: false, content: todoForm.value.todo });
  }


  deleteTodo(todoID: string) {
    console.log(todoID);
    this.todoList.forEach((todoElement, index) => { if (todoElement._id === todoID) { this.todoList.splice(index, 1); } });
  }

  checkTodo(todoID: string) {
    console.log(todoID);
    this.todoList.forEach((todoElement) => { if (todoElement._id === todoID) { todoElement.checked = true; } });
  }

  unCheckTodo(todoID: string) {
    console.log(todoID);
    this.todoList.forEach((todoElement) => { if (todoElement._id === todoID) { todoElement.checked = false; } });

  }

}
