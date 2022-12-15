import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routingmodule';
import { ArchiveComponent } from './archive/archive.component';
import { TasksComponent } from './tasks/tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, CommonModule, AppRoutingModule],
  declarations: [
    AppComponent,
    ArchiveComponent,
    TasksComponent,
    NotFoundComponent,
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule {}
