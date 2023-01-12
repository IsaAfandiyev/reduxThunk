import "./index.css"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {del, fetchData} from "../../redux/actions/todoActions";

function Table() {
    const dispatch = useDispatch();
    const data = useSelector((state)=>state);

    useEffect(()=>{
        dispatch(fetchData())
    },[])
    return <>
        <table>
            <thead>
            <tr>
                <th>id</th>
                <th>Contact Title</th>
                <th>Contact Name</th>
                <th>Company Name</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {data &&
                data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.companyName}</td>
                        <td>{item.contactName}</td>
                        <td>{item.contactTitle}</td>
                        <button onClick={() => dispatch(del(item))}>Delete</button>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}

export default Table;