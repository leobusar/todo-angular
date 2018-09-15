import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { TaskService } from './services/task.service';
import { AppRoutingModule } from './app.routes';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TaskComponent } from './components/task/task.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    InicioComponent,
    HeaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase ),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
