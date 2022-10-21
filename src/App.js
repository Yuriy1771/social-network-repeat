import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {addMessage, updateNewMessageText} from "./Redux/state";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<Profile
                        state={props.state}
                        dispatch={props.dispatch}
                    />}/>
                </Routes>
                <Routes>
                    <Route path='/dialogs/*' element={<Dialogs
                        state={props.state}
                        dispatch={props.dispatch}
                    />}/>
                </Routes>
                <Routes>
                    <Route path='/news' element={<News state={props.state}/>}/>
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
