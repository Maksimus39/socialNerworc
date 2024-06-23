import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navdar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {addPost, RootStateType} from "./redux/state";


export type AppProps = {
    state: RootStateType
    addPost:(postMessage: string)=>void
}

function App({state}: AppProps) {

    return (

        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Routes>

                    <Route path='/profile' element={<Profile posts={state.profilePage.posts} addPost={addPost}/>}/>
                    <Route path='/dialogs'
                           element={<Dialogs dialogs={state.profilePage.dialogs}
                                             messages={state.dialogsPage.messages}/>}/>
                    <Route path='/news' element={<News/>}/>
                    <Route path='/music' element={<Music/>}/>
                    <Route path='/settings' element={<Settings/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App;

