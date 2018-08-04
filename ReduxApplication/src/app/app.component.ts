import { Component } from '@angular/core';
import { NgRedux, select } from '../../node_modules/@angular-redux/store';
import { IAppState } from './store';
import { INCREMENT, DECREMENT } from './action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Redux Counter Example';
  // observable binder

  @select(s => s.get('counter')) counter;
  constructor(private ngRedux: NgRedux<IAppState>) {

  }

  increment() {
    this.ngRedux.dispatch({ type : INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type : DECREMENT });
  }
}
