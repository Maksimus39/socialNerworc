import './index.css';
import store, {RootStateType} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";


// Создаем корень один раз, в глобальной области видимости модуля
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const rerenderEntireTree = (state: RootStateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={store.addPost.bind(store)}
                    updateNewPostText={store.updateNewPostText.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

// Теперь функция rerenderEntereTree использует уже созданный корень, когда ее вызывают

reportWebVitals();


rerenderEntireTree(store.getState())

store.subscribe(() => rerenderEntireTree(store._state))


