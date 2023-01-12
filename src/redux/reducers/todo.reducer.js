import {ADD,DELETE,GET_ALL} from "../actions/todo.action";


const TodoReducer = (state=[],action) =>{
    const randomNum = Math.ceil(Math.random()*1000000)
    switch (action.type){
        case ADD:
            return [...state,{id:randomNum,text:action.payload}];
        case DELETE:
            return state.filter((q)=>q.id !== action.payload.id);
        case GET_ALL:
            return [...action.payload];
            console.log(action)
        default:
            return state
    }
}
export default TodoReducer;