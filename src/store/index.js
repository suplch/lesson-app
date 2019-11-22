import { createStore, combineReducers } from 'redux'

import { navReducer } from './nav-menu';

const appReducer = combineReducers({
    nav: navReducer
});


const store = createStore(appReducer);

export { store }
