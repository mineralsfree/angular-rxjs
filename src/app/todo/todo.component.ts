import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../todos-store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() complete = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

}
