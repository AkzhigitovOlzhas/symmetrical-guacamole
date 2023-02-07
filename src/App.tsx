import {Link, Route, Routes} from "react-router-dom";
import {AboutPage} from "./pages/AboutPage/AboutPage";
import {MainPage} from "./pages/MainPage/MainPage";
import './index.scss'

export const App = () => {
    return (
        <div className="app">
            <div>
                <Link to='/about'>ABOUT</Link>
                <Link to='/'>main</Link>
            </div>
            <Routes>
                <Route path='/about' element={<AboutPage/>}/>
                <Route path='/' element={<MainPage/>}/>
            </Routes>
        </div>
    );
};
