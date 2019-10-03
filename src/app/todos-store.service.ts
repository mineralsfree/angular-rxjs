import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {map} from 'rxjs/operators';
export interface Todo {
  title: string;
  isCompleted: boolean;
  id: number;
}
@Injectable({
  providedIn: 'root'
})
export class TodosStoreService {
  private readonly Todos = new BehaviorSubject<Todo[]>([{title: 'kek', isCompleted: false, id: 1}]);
  readonly todos$ = this.Todos.asObservable();
  readonly completedTodos$ = this.todos$.pipe(
    map(todos => todos.filter(todo => todo.isCompleted))
  )
  get todos(): Todo[] {
    return this.Todos.getValue();
  }
  set todos(val: Todo[]) {
    this.Todos.next(val);
  }
  addTodo(title: string) {
    this.todos = [
      ...this.todos,
      {id: this.todos.length + 1, title, isCompleted: false}
    ];
  }
  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
  setCompleted(id: number, isCompleted: boolean) {
    const todo = this.todos.find(todo => todo.id === id);

    if (todo) {
      // we need to make a new copy of todos array, and the todo as well
      // remember, our state must always remain immutable
      // otherwise, on push change detection won't work, and won't update its view

      const index = this.todos.indexOf(todo);
      this.todos[index] = {
        ...todo,
        isCompleted
      };
      this.todos = [...this.todos];
    }
  }

  constructor() { }
}
