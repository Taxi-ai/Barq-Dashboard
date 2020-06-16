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

  audio: HTMLAudioElement = new Audio('../../../assets/audio/complete-task.mp3');


  constructor() { }

  ngOnInit() {
    this.getLocalStorageToDos();
    this.audio.load();

  }

  submitTodo(todoForm: NgForm) {
    console.log(todoForm.value);
    if (todoForm.invalid) {
      return;
    }

    const todoId = Math.round(Math.random() * 1000).toString();

    this.todoList.push({ _id: todoId, checked: false, content: todoForm.value.todo, makerAdminId: this.getAdminUserName() });
    todoForm.reset();
    this.filterToDo(this.filterQuery);

  }


  deleteTodo(todoID: string) {
    console.log('delete ' + todoID);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i]._id === todoID) {
        this.todoList.splice(i, 1);
        break;
      }
    }
    // this.todoList.forEach((todoElement, index) => {
    //   if (todoElement._id === todoID) {
    //     this.todoList.splice(index, 1);
    //   }

    // });


    this.filterToDo(this.filterQuery);

  }

  checkTodo(todoID: string) {
    console.log('checked ' + todoID);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i]._id === todoID) {
        this.todoList[i].checked = true;
        this.todoList[i].checkerAdminId = this.getAdminUserName();
        this.audio.play(); // task-completion sound effect
        break;
      }
    }

    // this.todoList.forEach((todoElement, index) => {
    //   if (todoElement._id === todoID) {
    //     todoElement.checked = true;
    //     todoElement.checkerAdminId = this.getAdminUserName();
    //     return;
    //   }
    // });

    this.filterToDo(this.filterQuery);

  }

  unCheckTodo(todoID: string) {
    console.log('unchecked ' + todoID);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.todoList.length; i++) {
      if (this.todoList[i]._id === todoID) {
        this.todoList[i].checked = false;
        this.todoList[i].checkerAdminId = null;
        break;
      }
    }
    // this.todoList.forEach((todoElement, index) => {
    //   if (todoElement._id === todoID) {
    //     todoElement.checked = false;
    //     todoElement.checkerAdminId = null;
    //   }
    // });

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
        this.shownTodoList = this.todoList.filter(todoElement => todoElement.checked);

        // this.todoList.forEach(todoElement => {
        //   if (todoElement.checked) {
        //     this.shownTodoList.push(todoElement);
        //   }
        // });
        break;

      case 'Uncompleted':
        this.filterQuery = 'Uncompleted';
        this.shownTodoList = this.todoList.filter(todoElement => !todoElement.checked);

        // this.todoList.forEach(todoElement => {
        //   if (!todoElement.checked) {
        //     this.shownTodoList.push(todoElement);
        //   }
        // });
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
