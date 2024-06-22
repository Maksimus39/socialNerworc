import classes from './Dialogs.module.css'
import React from "react";
import {DialogsPropsItem, PropsMessage} from "../../redux/state";
import {DialogsItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";


type DialogsProps = {
    dialogs?: DialogsPropsItem[]
    messages: PropsMessage[]
}
export const Dialogs = ({dialogs, messages}: DialogsProps) => {


    const dialogsElement = dialogs?.map(dialog => {
        return (
            <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
    })

    const messageElement = messages.map(message => {
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