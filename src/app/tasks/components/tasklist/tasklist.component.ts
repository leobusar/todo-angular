import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task';


@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  @Input() public tasks: Task[];
  @Output() public deleteTask = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  eliminarTarea(e, task){
  	this.deleteTask.emit(task);
  }
}
