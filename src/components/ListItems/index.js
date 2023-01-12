import {useDispatch, useSelector} from "react-redux";
import {del} from "../../redux/actions/todoActions";


function ListItems() {
    const todos = useSelector((state)=>state);
    const dispatch = useDispatch();
console.log(todos)
    return <>
        <ul>
            {
                todos.map((todo)=> <li key={todo.id}>{todo.companyName}
                <button onClick={()=>dispatch(del(todo))}>X</button>
                </li>)
            }
        </ul>
    </>
}
export default ListItems;