import {useSelector} from "react-redux";

function About () {
    const todos = useSelector((state)=>state)
    return <>
        <h1>{todos.length}</h1>
    </>
}
export default About;