import { Component, OnInit } from '@angular/core';
import { ToDo } from './todo.model';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoList: ToDo[] = [];
  shownTodoList: ToDo[] = [];
  filterQuery: string;

  constructor() { }

  ngOnInit() {
    this.getLocalStorageToDos();
  }

  submitTodo(todoForm: NgForm) {
    console.log(todoForm.value);
    if (todoForm.invalid) {
      return;
    }

    const todoId = Math.round(Math.random() * 1000).toString();

    this.todoList.push({ _id: todoId, checked: false, content: todoForm.value.todo, makerAdminId: this.getAdminUserName() });
    this.filterToDo(this.filterQuery);

  }


  deleteTodo(todoID: string) {
    console.log(todoID);
    this.todoList.forEach((todoElement, index) => {
      if (todoElement._id === todoID) {
        this.todoList.splice(index, 1);
      }

    });

    this.filterToDo(this.filterQuery);

  }

  checkTodo(todoID: string) {
    console.log(todoID);
    this.todoList.forEach((todoElement, index) => {
      if (todoElement._id === todoID) {
        todoElement.checked = true;
        todoElement.checkerAdminId = this.getAdminUserName();
        return;
      }
    });


    this.filterToDo(this.filterQuery);

  }

  unCheckTodo(todoID: string) {
    console.log(todoID);
    this.todoList.forEach((todoElement, index) => {
      if (todoElement._id === todoID) {
        todoElement.checked = false;
        todoElement.checkerAdminId = null;
        return;
      }
    });

    this.filterToDo(this.filterQuery);
  }

  filterToDo(filterQuery: string) {
    if (this.todoList.length < 1) {
      this.saveLocalStorageToDos();
      return;
    }
    this.shownTodoList = [];
    switch (filterQuery) {
      case 'Completed':
        this.filterQuery = 'Completed';
        this.todoList.forEach(todoElement => {
          if (todoElement.checked) {
            this.shownTodoList.push(todoElement);
          }
        });
        break;

      case 'Uncompleted':
        this.filterQuery = 'Uncompleted';
        this.todoList.forEach(todoElement => {
          if (!todoElement.checked) {
            this.shownTodoList.push(todoElement);
          }
        });
        break;

      default:
        this.filterQuery = 'All';
        this.shownTodoList = [...this.todoList];
        break;
    }
    this.saveLocalStorageToDos();
  }

  getLocalStorageToDos() {
    if (localStorage.getItem('ToDos') !== null) {
      this.todoList = [...JSON.parse(localStorage.getItem('ToDos'))];
    }
    this.filterToDo('All');
  }

  saveLocalStorageToDos() {
    console.log(this.todoList);

    localStorage.setItem('ToDos', JSON.stringify(this.todoList));
  }


  getAdminUserName() {
    return JSON.parse(sessionStorage.getItem('decodedAdminData')).username;
  }

}
