import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskeditComponent } from './components/taskedit/taskedit.component';
import { TasklistComponent } from './components/tasklist/tasklist.component';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule
  ],
  declarations: [TasksComponent, TaskeditComponent, TasklistComponent]
})
export class TasksModule { }
