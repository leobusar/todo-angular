import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from  '../../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   owner :string;
   tasklist :Task[];
   task :Task;
   button :string;
   successMessage :string;

  constructor(public taskService: TaskService) { 
  	this.owner = "Leonardo Bustamante";
  	this.tasklist = [];
    this.reset();
    /* [
		{
			"id": "1",
			"name": "Organizar escritorio",
			"category": "laboral"
		},
		{
			"id": "2",
			"name": "Requerimientos",
			"category": "WebP"
		},
		{
			"id": "3",
			"name": "Pagar servicios",
			"category": "personal"
		},
		{
			"id": "4",
			"name": "Preparar proyecto", 
			"category": "WebP"
		} 
  		];*/
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((tasks)=>
      {
        console.log(tasks);
        this.tasklist = tasks;
        });

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
