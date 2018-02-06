import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { CrudService } from './crud-service';
import { CreateTaskComponent } from './create-task/create-task.component';



@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    CreateTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
