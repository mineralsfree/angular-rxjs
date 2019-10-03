import { Component } from '@angular/core';
import {TodosStoreService} from './todos-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public todosStore: TodosStoreService) {
  }
}
