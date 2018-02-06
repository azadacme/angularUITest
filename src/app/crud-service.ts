import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';


@Injectable()
export class CrudService {
  http : Http;
  reqObj;
  value;

  reqPayload = {  

    "fields":{  
       "title":{  
          "stringValue":""
       },
       "description":{  
          "stringValue":""
       }
    }
 }

  constructor(http : Http) { 
    this.http = http;
  }

   getTask() {
       return this.http.get("https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks")
            .map((response: Response) => {
              const data = response.json();
              const extractedTask = data.documents;
              const tasks = extractedTask.map((task) => {
                return {title: task.fields.title, description: task.fields.description};
              });
              return tasks;
            })
   }

   addTask(newTask) {

      this.reqObj = this.reqPayload['fields'];
      console.log(this.reqObj['title'].stringValue);
      this.reqObj['title'].stringValue = newTask.title;
      this.reqObj['description'].stringValue = newTask.desc;

        this.http.post("https://firestore.googleapis.com/v1beta1/angular-task-e7f39/myproject/databases/(default)/documents/tasks",this.reqPayload).subscribe(
          (res : Response) => {
              console.log(res);
          }
        )
   }

    deleteTask(taskId) {
        
       return this.http.delete("https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks/"+taskId);
      
    }

}
