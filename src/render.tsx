import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost, RootStateType} from "./redux/state";
import {BrowserRouter} from "react-router-dom";

export let rerenderEntereTree = (state: RootStateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App
                    state={state}
                    addPost={addPost}
                />
            </React.StrictMode>
        </BrowserRouter>
    );
}


reportWebVitals();
