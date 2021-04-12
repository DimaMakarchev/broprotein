import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {proteinstoreReducer} from "./stateBr/proteinstoreReducer";
import {preloaderReducer} from "./stateBr/preloaderReducer";
import {errortestReducer} from "./stateBr/errortestReducer";

const rootReducers = combineReducers({
    form: formReducer,
    preloader: preloaderReducer,
    proteinstore: proteinstoreReducer,
    errortest: errortestReducer,

});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducers,composeEnhancers(applyMiddleware(thunk)));

// type RootReducerType = typeof rootReducers;
// export type AppRootReducerType = ReturnType<RootReducerType>;
//
// // export const store = createStore(rootReducers, applyMiddleware(thunk));
//
// // @ts-ignore
window.store = store;


