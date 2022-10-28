import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        store={props.store}
                    />}/>
                </Routes>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer
                        store={props.store}
                    />}/>
                </Routes>
                <Routes>
                    <Route path='/news' element={<NewsContainer
                        store={props.store}
                    />}/>
                </Routes>
                <Routes>
                    <Route path='/music' element={<Music/>}/>
                </Routes>
                <Routes>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
