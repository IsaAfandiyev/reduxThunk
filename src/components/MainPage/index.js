import {useState} from "react";
import {useDispatch} from "react-redux";
import {add} from "../../redux/actions/todoActions";


function MainPage() {
    const [inputValue,setInputValue] = useState('')
    console.log(inputValue)
    const dispatch = useDispatch();
    const submit = (e) =>{
        e.preventDefault();
        dispatch(add(inputValue));
        setInputValue('');
    }
    return <>
        <form action="" onSubmit={(e)=>submit(e)}>
            <input type="text"  onChange={(e)=>setInputValue(e.target.value)} value={inputValue}/>
            <button>Add</button>
        </form>
    </>
}

export default MainPage;