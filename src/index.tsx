import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DialogsPropsItem} from "./components/Dialogs/DialogItem/DialogItem";
import {PropsMessage} from "./components/Dialogs/Message/Message";

export type PostsType = {
    id: number
    message: string
    LikeCounts: string
}

export const posts: PostsType[] = [
    {id: 1, message: 'Hi how are you?', LikeCounts: '15'},
    {id: 2, message: 'It`s my first post', LikeCounts: '20'}
]

// Блок для отрисовки users
export const dialogsData: DialogsPropsItem[] = [
    {name: "Max", id: 1},
    {name: "Larisa", id: 2},
    {name: "Andrey", id: 3},
    {name: "Bogdan", id: 4}
]

// Блок для отрисовки Message
export const messagesData: PropsMessage[] = [
    {message: "Привет, семья! Как ваши дела сегодня?", id: 1},
    {message: "Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину.", id: 2},
    {message: "Привет, всем! Я только что вернулся с тренировки, было классно.", id: 3},
    {message: "Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен.", id: 4},
]

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App
            posts={posts}
            dialogsData={dialogsData}
            messagesData={messagesData}
        />
    </React.StrictMode>
);

reportWebVitals();
