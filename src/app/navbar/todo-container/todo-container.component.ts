import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  showToDos = false;

  toggleToDoList() {

    this.showToDos = !this.showToDos;

    const todoDivState: string = document.getElementById('todoDiv').style.display;

    if (todoDivState === 'none' || todoDivState === '') {
      document.getElementById('todoDiv').style.display = 'block';
    } else if (todoDivState === 'block') {
      document.getElementById('todoDiv').style.display = 'none';
    }
  }

  constructor() {

  }


  ngOnInit() {

    const viewportHeight = window.innerHeight;
    const todoDivHeight = viewportHeight - 52;
    document.getElementById('todoDiv').style.height = todoDivHeight.toString() + 'px';

  }

}
