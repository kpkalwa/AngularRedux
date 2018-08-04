import { INCREMENT, DECREMENT } from './action';
import { Map } from 'immutable';

// single source of triuth
// 4. create store and define reducers

// IAppState Contract
export interface IAppState {
    counter: number;
}


// defining intial application state pr default state
export const INITIAL_STATE: IAppState = {
    counter: 0
};

// reducers DB operations that match actions
// export function rootReducer(state: IAppState, action): IAppState {
//     switch (action.type) {
//         case INCREMENT:
//             return{
//                 counter : state.counter + 1
//             };
//         case DECREMENT:
//             return {
//                 counter : state.counter - 1
//             };
//     }
//     return state;
// }


export function rootReducer(state: Map<string, any>, action): Map<string, any> {
    switch (action.type) {
        case INCREMENT:
            return state.set('counter', state.get('counter') + 1);
        case DECREMENT:
            return state.set('counter', state.get('counter') - 1);
    }
    return state;
}
