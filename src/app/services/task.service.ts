import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, 
	AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';

import { Task } from '../models/task';

@Injectable()
export class TaskService {
  task: Task;
  tasks: Observable <Task[]>;
  taskCollection: AngularFirestoreCollection <Task>; 
  taskDocument: AngularFirestoreDocument <Task>;

  constructor(private readonly db: AngularFirestore) {
  	this.taskCollection = db.collection('tasks');
    this.tasks = this.taskCollection.valueChanges();
  }

  getTasks(){
  	return this.tasks;
  }

  addTask(task:Task){
    //this.taskCollection.add(task);
    const id =  this.db.createId();
    this.task = {id, "name": task.name, "category": task.category};
    this.taskCollection.doc(id).set(this.task);
  }

  delTask(task:Task){
    this.taskDocument = this.taskCollection.doc(task.id);
    this.taskDocument.delete();
  }

  updateTask(task:Task){
    this.taskDocument = this.taskCollection.doc(task.id);
    this.taskDocument.set(task);
  }

}
