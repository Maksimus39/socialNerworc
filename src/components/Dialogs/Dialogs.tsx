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
}

export const Message = (props: PropsMessage) => {
    return <div className={classes.message}>{props.message}</div>
}


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <DialogsItem name={"Max"} id={1}/>
                <DialogsItem name={"Larisa"} id={2}/>
                <DialogsItem name={"Andrey"} id={3}/>
                <DialogsItem name={"Bogdan"} id={4}/>
            </div>

            <div className={classes.messages}>

                <Message message={"Привет, семья! Как ваши дела сегодня?"}/>
                <Message message={"Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину."}/>
                <Message message={"Привет, всем! Я только что вернулся с тренировки, было классно."}/>
                <Message message={"Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен."}/>
            </div>

        </div>
    )
}