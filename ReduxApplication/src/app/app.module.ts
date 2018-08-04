import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

// DevToolsExtension = Augury for time travel
import { NgRedux, select, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { AppComponent } from './app.component';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { fromJS, Map } from 'immutable';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    // intantiate and configure store
    constructor(ngRedux: NgRedux<Map<string, any>>, devTools: DevToolsExtension) {
      // initializing the ngRedux
      // rootReducer Reduces DBops
      // INITIAL_STATE Defines initial state of application on load
      const enhancer = isDevMode() ? [devTools.enhancer()] : [];
      ngRedux.configureStore(rootReducer, fromJS(INITIAL_STATE), [], enhancer);
   }
}
