import MainPage from "./components/MainPage";
import {Link, Routes,Route} from "react-router-dom";
import ListItems from "./components/ListItems";
import About from "./components/About";
import Table from "./components/Table";


function App() {
  return (
    <div className="App">
        <nav>
            <ul>
                <li>
                    <Link to={'/'} >
                        MainPage
                    </Link>
                </li>
                <li>
                    <Link to={'/todos'} >
                        Todos
                    </Link>
                </li>
                <li>
                    <Link to={'/about'} >
                        About
                    </Link>
                </li>
                <li>
                    <Link to={'/table'} >
                        Table
                    </Link>
                </li>
            </ul>
        </nav>
        <div>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/todos' element={<ListItems/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/table' element={<Table/>}/>
            </Routes>
        </div>
    </div>
  );
}

export default App;
