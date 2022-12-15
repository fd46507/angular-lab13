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
  constructor(private tasksService: TasksService) {}

  addTask() {
    let newTask: Task = new Task();
    newTask.title = this.title;
    newTask.deadline = this.deadline;
    newTask.completed = false;
    newTask.archived = false;
    this.tasksService.post(newTask).subscribe((response) => {
      console.log(response);
    });
  }

  ngOnInit() {}
}
