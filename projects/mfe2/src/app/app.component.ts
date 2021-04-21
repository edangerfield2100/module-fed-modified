import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ToDoActions } from 'projects/state-lib/src/lib/app-state/actions';
import { ToDo } from 'projects/state-lib/src/lib/app-state/models/to-do';
import { selectMyToDos } from 'projects/state-lib/src/lib/app-state/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'mfe2';

  constructor(private store: Store) {}

  toDosSelector: Observable<ToDo[]> = this.store.select(selectMyToDos);
  toDos: ToDo[];

  ngOnInit(): void {
    this.toDosSelector.subscribe((t) => {
      this.toDos = t;
    });
  }

  addToDo(): void {
    const d = new Date();
    this.store.dispatch(
      ToDoActions.addToDo({
        todo: {
          name: 'MFE2: Some action #' + d.toString(),
          description: 'stuff',
        },
      })
    );
  }
}
