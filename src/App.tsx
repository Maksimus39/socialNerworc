import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Navbar} from "./Navbar";
import {Footer} from "./Footer";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <Footer/>
        </div>
    );
}

export default App;

