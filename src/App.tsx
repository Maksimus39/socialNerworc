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
import {RootStateType} from "./redux/state";


export type AppProps = {
    state: RootStateType
    addPost: (postText: string) => void
    updateNewPostText: (newText: string) => void
}

function App({state, addPost, updateNewPostText}: AppProps) {

    return (

        <div className='app-wrapper'>

            <Header/>
            <Navbar/>

            <div className='app-wrapper-content'>

                <Routes>

                    <Route path='/profile' element={<Profile profilePage={state.profilePage}
                                                             addPost={addPost}
                                                             updateNewPostText={updateNewPostText}
                    />}/>


                    <Route path='/dialogs'
                           element={<Dialogs dialogs={state.dialogsPage.dialogs}
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

