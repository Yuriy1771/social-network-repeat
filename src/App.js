import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import NewsContainer from "./Components/News/NewsContainer";
import FindUsersContainer from "./Components/FindUsers/FindUsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderComponent from "./Components/Header/HeaderComponent";

function App(props) {
    return (
        <div className='app-wrapper'>
            <HeaderComponent/>
            <Navbar state={props.state}/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/profile' element={<ProfileContainer />}/>
                    <Route path='/profile/:userId' element={<ProfileContainer />}/>
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
