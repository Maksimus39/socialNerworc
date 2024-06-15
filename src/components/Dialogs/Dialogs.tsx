import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogsPropsItem = {
    name: string
    id: number
}

export const DialogsItem = (props: DialogsPropsItem) => {

    const patch = "/dialogs/" + props.id;
    return <div className={classes.dialog}>

        <NavLink to={patch}>{props.name}</NavLink>
    </div>
}


type PropsMessage = {
    message: string
    id: number
}

export const Message = (props: PropsMessage) => {
    return <div className={classes.message}>{props.message}</div>
}

export const Dialogs = () => {
    // Блок для отрисовки users
    let dialogsData: DialogsPropsItem[] = [
        {name: "Max", id: 1},
        {name: "Larisa", id: 2},
        {name: "Andrey", id: 3},
        {name: "Bogdan", id: 4}
    ]

    const dialogsElement = dialogsData.map(dialog => {
        return (
            <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
    })

    // Блок для отрисовки Message
    let messagesData: PropsMessage[] = [
        {message: "Привет, семья! Как ваши дела сегодня?", id: 1},
        {message: "Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину.", id: 2},
        {message: "Привет, всем! Я только что вернулся с тренировки, было классно.", id: 3},
        {message: "Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен.", id: 4},
    ]
    const messageElement = messagesData.map(message => {
        return (
            <Message key={message.id} message={message.message} id={message.id}/>
        )
    })

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                {dialogsElement}
            </div>

            <div className={classes.messages}>

                {messageElement}
            </div>
        </div>
    )
}