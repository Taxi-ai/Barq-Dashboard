import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar-todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.css']
})
export class TodoContainerComponent implements OnInit {

  constructor() {

  }

  // pageScrolled = false;

  showToDos = false;

  // @HostListener('window:scroll', ['$event'])

  // scrollHandler(event) {
  //   this.pageScrolled = true;
  //   console.log('todo');

  // }

  toggleToDoList() {

    this.showToDos = !this.showToDos;

    const todoDivState: string = document.getElementById('todoDiv').style.display;

    if (todoDivState === 'none' || todoDivState === '') {
      document.getElementById('todoDiv').style.display = 'block';
    } else if (todoDivState === 'block') {
      document.getElementById('todoDiv').style.display = 'none';
    }
  }


  ngOnInit() {
    console.log(window.innerWidth);

    if (window.innerWidth > 500) {
      this.setTodoDivHeight(52);

    } else {
      this.setTodoDivHeight(40);

    }


  }

  setTodoDivHeight(navHeight: number) {
    const viewportHeight = window.innerHeight;
    const todoDivHeight = viewportHeight - navHeight;
    document.getElementById('todoDiv').style.height = todoDivHeight.toString() + 'px';
  }

}
