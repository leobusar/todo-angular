import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../models/task';

@Component({
  selector: 'app-taskedit',
  templateUrl: './taskedit.component.html',
  styleUrls: ['./taskedit.component.css']
})
export class TaskeditComponent implements OnInit {
	@Output() public agregartarea = new EventEmitter<void>();

	task :Task;

  constructor() { }

  ngOnInit() {
  	this.reset();

  }

  reset(){
  	this.task = new Task;
  }

}
