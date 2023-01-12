import {ADD,DELETE,GET_ALL} from "./todo.action";
import axios from "axios";

export const add = (todo) => {
    return {
        type:ADD,
        payload:todo,
    }
}
export const del = (todo) => {
    return {
        type:DELETE,
        payload:todo,
    }
}

export const fetchData = () =>{
    return async (dispatch) => {
        await axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {dispatch({type:GET_ALL , payload:res.data})})
    }
}
