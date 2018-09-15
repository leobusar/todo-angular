import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from  '../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit, OnDestroy {

  tasklist :Task[];
  owner :string;
  private _subscriptions: Subscription[] = [];

  constructor( public taskService: TaskService ) {
  	this.owner = "Leonardo Bustamante";
  	this.tasklist = [];
  //  this.reset();
   }

  ngOnInit() {
    this._subscriptions.push( this.taskService.getTasks().subscribe((tasks)=>
        {
          this.tasklist = tasks;
        }) 
     );
  }

// OnDestroy Hook
  public ngOnDestroy() {
    // Unsubscribe from each Subscription
    this._subscriptions.forEach((subscription: Subscription) =>
     { subscription.unsubscribe() });
  }

  // reset(){
  //   this.task = {"id": "", "name": "", "category": ""};
  // }

  addTask(task){
  	if( task.name !="" && task.category !=""){
      if (task.id !=""){
        this.taskService.updateTask(task);
        //this.successMessage = "La tarea ha sido actualizada";    
      }else{
        this.taskService.addTask(task);
        //this.successMessage = "La tarea ha sido actualizada";            
      }
      //setTimeout(() => this.successMessage = null, 2000);

      //this.task = {"id": "", "name": "", "category": ""};
      //this.reset();
    }

  }

  deleteTask(task: Task){
  	console.log(task);
    this.taskService.delTask(task);
  }

   getTask(e, task: Task){
 //    task = task;
 //    this.button = "Editar";

   }


}
