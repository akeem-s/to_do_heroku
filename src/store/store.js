//react and redux dependencies
import {createStore, applyMiddleware, compose} from 'redux';

//middlewares
import thunk from 'redux-thunk'

//all reducers
import reducers from '../reducers/combineReducers';

let store = createStore(reducers, compose(
    applyMiddleware(thunk),
    //For working redux dev tools in chrome (https://github.com/zalmoxisus/redux-devtools-extension)
    window.devToolsExtension ? window.devToolsExtension() : function (f) {
        return f;
    }
));

export default store;
