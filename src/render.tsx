import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { addPost, RootStateType, updateNewPostText } from "./redux/state";

// Создаем корень один раз, в глобальной области видимости модуля
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

export const rerenderEntereTree = (state: RootStateType) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    updateNewPostText={updateNewPostText}
                />
            </BrowserRouter>
        </React.StrictMode>
    );
}

// Теперь функция rerenderEntereTree использует уже созданный корень, когда ее вызывают

reportWebVitals();

