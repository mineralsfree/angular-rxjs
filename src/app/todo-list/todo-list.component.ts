import {Component, Input, OnInit} from '@angular/core';
import {Todo, TodosStoreService} from '../todos-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todo: Todo;
  constructor(public todosStore: TodosStoreService) { }


  ngOnInit() {
  }

}
