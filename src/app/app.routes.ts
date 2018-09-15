import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { InicioComponent } from './components/inicio/inicio.component';
import { TaskComponent } from './components/task/task.component';

const APP_ROUTES: Routes = [
     { path: '', redirectTo: 'inicio', pathMatch: 'full' },     
     { path: 'inicio', component: InicioComponent },
     { path: 'task', component: TaskComponent },
     { path: 'tareas', loadChildren: './tasks/tasks.module#TasksModule' },
     { path: '**', redirectTo: 'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }