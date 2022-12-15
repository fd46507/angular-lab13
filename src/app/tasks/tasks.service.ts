import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  constructor(private http: HttpClient) {}

  // public get(archived = false): Observable<Task[]> {}

  public post(task: Task): Observable<any> {
    console.log(task);
    return this.http.post(
      'https://lab13.zecer.wi.zut.edu.pl/api/fw46507',
      task
    );
  }

  // public put(task: Task): Observable<any> {}

  // public deleteTask(task: Task): Observable<any> {}
}
