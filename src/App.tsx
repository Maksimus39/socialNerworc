import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navdar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {PostsType} from "./index";
import {DialogsPropsItem} from "./components/Dialogs/DialogItem/DialogItem";
import {PropsMessage} from "./components/Dialogs/Message/Message";


type AppProps = {
    posts: PostsType[]
    dialogsData: DialogsPropsItem[]
    messagesData: PropsMessage[]
}

function App({posts,dialogsData,messagesData}: AppProps) {


    return (
        <BrowserRouter>

            <div className='app-wrapper'>

                <Header/>
                <Navbar/>

                <div className='app-wrapper-content'>

                    <Routes>

                        <Route path='/profile' element={<Profile posts={posts}/>}/>
                        <Route path='/dialogs' element={<Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>

                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;

