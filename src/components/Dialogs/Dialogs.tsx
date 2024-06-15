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


    let dialogsData = [
        {name: "Max", id: 1},
        {name: "Larisa", id: 2},
        {name: "Andrey", id: 3},
        {name: "Bogdan", id: 4}
    ]

    let messagesData = [
        {message: "Привет, семья! Как ваши дела сегодня?", id: 1},
        {message: "Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину.", id: 2},
        {message: "Привет, всем! Я только что вернулся с тренировки, было классно.", id: 3},
        {message: "Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен.", id: 4},
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsItem name={dialogsData[3].name} id={dialogsData[3].id}/>

            </div>

            <div className={classes.messages}>

                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
                <Message message={messagesData[3].message} id={messagesData[3].id}/>
            </div>

        </div>
    )
}