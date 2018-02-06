import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud-service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {
   
  crudService;
  taskList = [];
  arrayOfKeys;

  constructor(crudService:CrudService) {
      this.crudService = crudService;
   }

   ngOnInit() {
    this.crudService.getTask()
      .subscribe(
        (res) => {
          this.taskList = res;
          this.arrayOfKeys = Object.keys(this.taskList);
          console.log(this.taskList);
          console.log(this.arrayOfKeys);
        }
      );
  }



}
