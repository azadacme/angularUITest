import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud-service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  crudService;
  task = {
      title : '',
      desc : ''
  }

  constructor(crudService:CrudService) {
       this.crudService = crudService;
   }

   addNewTask() {
       console.log(this.task);
       this.crudService.addTask()
   }

  ngOnInit() {
  }

}


