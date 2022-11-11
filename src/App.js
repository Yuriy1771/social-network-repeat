import './App.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";
import FindUsersContainer from "./Components/FindUsers/FindUsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";

function App(props) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<ProfileContainer />}/>
                </Routes>
                <Routes>
                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                </Routes>
                <Routes>
                    <Route path='/news' element={<NewsContainer/>}/>
                </Routes>
                <Routes>
                    <Route path='/music' element={<Music/>}/>
                </Routes>
                <Routes>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
                <Routes>
                    <Route path='/findUsers' element={<FindUsersContainer />}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;
