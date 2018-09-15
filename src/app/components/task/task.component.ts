import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from  '../../services/task.service';
 import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit, OnDestroy {
   owner :string;
   tasklist :Task[];
   task :Task;
   button :string;
   successMessage :string;
   private _subscriptions: Subscription[] = [];

  constructor(public taskService: TaskService) { 
  	this.owner = "Leonardo Bustamante";
  	this.tasklist = [];
    this.reset();

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
  
  reset(){
    this.task = {"id": "", "name": "", "category": ""};
    this.button = "Guardar";    
  }

  addTask(){
  	if( this.task.name !="" && this.task.category !=""){
      if (this.task.id !=""){
        this.taskService.updateTask(this.task);
        this.successMessage = "La tarea ha sido actualizada";    
      }else{
        this.taskService.addTask(this.task);
        this.successMessage = "La tarea ha sido actualizada";            
      }
      setTimeout(() => this.successMessage = null, 2000);

      //this.task = {"id": "", "name": "", "category": ""};
      this.reset();
    }

  }

  deleteTask(e, task: Task){
    this.taskService.delTask(task);
  }

   getTask(e, task: Task){
     this.task = task;
     this.button = "Editar";

   }
}
