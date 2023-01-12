import {applyMiddleware, createStore} from 'redux'
import TodoReducer from "../reducers/todo.reducer";
import thunk from "redux-thunk";

const store = createStore(TodoReducer,applyMiddleware(thunk))

export default store;