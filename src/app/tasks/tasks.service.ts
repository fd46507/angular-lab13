import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './tasks';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  retrievedData = 1;
  constructor(private http: HttpClient) {}

  public get(archived = false): Observable<any> {
    return this.http.get(
      `https://lab13.zecer.wi.zut.edu.pl/api/fd46507?archived=${archived}`
    );
  }

  public post(task: Task): Observable<any> {
    console.log(task);
    return this.http.post(
      'https://lab13.zecer.wi.zut.edu.pl/api/fd46507',
      task
    );
  }

  public put(task: Task): Observable<any> {
    this.http
      .put(`https://lab13.zecer.wi.zut.edu.pl/api/fd46507/${task.id}`, task)
      .subscribe((response) => {
        console.log(response);
      });
    return;
  }

  // public deleteTask(task: Task): Observable<any> {}
}
