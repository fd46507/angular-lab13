import { Component, OnInit } from '@angular/core';
import { Task } from './tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  title?: string;
  deadline?: Date;
  retrievedData: any;
  tasks: Array<Task> = new Array<Task>();

  constructor(private tasksService: TasksService) {}

  addBtnClick() {
    let newTask: Task = new Task();
    newTask.title = this.title;
    newTask.deadline = this.deadline;
    newTask.completed = false;
    newTask.archived = false;
    this.tasksService.post(newTask).subscribe((response) => {
      console.log(response);
    });
    this.loadElements(true);
  }

  archiveCompleted() {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed) {
        this.tasks[i].archived = true;
        this.tasksService.put(this.tasks[i]);
      }
    }
    this.loadElements(true);
  }

  private switchTaskChanged(task: Task) {
    let div = document.getElementById(String(task.id));
    if (task.completed == true) {
      task.completed = false;
      div.style.backgroundColor = 'white';
    } else {
      task.completed = true;
      div.style.backgroundColor = '#ADADAD';
    }
    this.tasksService.put(task);
  }

  loadElementsOnSite(data: Object[], reload: boolean = false) {
    if (reload == true) {
      let mainDiv = document.getElementById('newElements');
      mainDiv.replaceChildren();
    }
    this.tasks = data;
    // const task = tasks.find(task => task.id === 589);
    // console.log(task);
    for (let i = 0; i < this.tasks.length; i++) {
      let div = document.createElement('div');
      div.style.borderStyle = 'solid';
      div.style.borderWidth = '1px';
      div.style.marginBottom = '25px';
      div.id = `${this.tasks[i].id}`;

      let label = document.createElement('label');
      label.style.fontWeight = 'bold';
      label.style.margin = '10px';
      label.innerText = String(this.tasks[i].deadline);

      let p = document.createElement('p');
      p.innerText = this.tasks[i].title;
      p.style.margin = '10px';

      let input = document.createElement('input');
      input.type = 'checkbox';
      input.style.position = 'absolute';
      input.style.right = '25px';
      input.style.marginTop = '-37px';
      input.id = `${this.tasks[i].id}`;
      input.addEventListener(
        'click',
        this.switchTaskChanged.bind(
          this,
          this.tasks.find((task) => task.id === parseInt(input.id))
        )
      );
      if (this.tasks[i].completed == true) {
        div.style.backgroundColor = '#ADADAD';
        input.checked = true;
      }

      div.appendChild(label);
      div.appendChild(p);
      div.appendChild(input);

      let mainDiv = document.getElementById('newElements');
      mainDiv.appendChild(div);
    }
    // console.log(tasks[1]);
  }

  loadElements(reload: boolean = false) {
    this.tasksService.get().subscribe((data) => {
      this.loadElementsOnSite(data, reload);
    });
  }

  ngOnInit() {
    this.loadElements();
  }
}
