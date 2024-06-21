import classes from './Dialogs.module.css'
import {DialogsItem, DialogsPropsItem} from "./DialogItem/DialogItem";
import React from "react";
import {Message, PropsMessage} from "./Message/Message";

type DialogsProps={
    dialogsData: DialogsPropsItem[]
    messagesData: PropsMessage[]
}
export const Dialogs = ({dialogsData,messagesData}:DialogsProps) => {


    const dialogsElement = dialogsData.map(dialog => {
        return (
            <DialogsItem key={dialog.id} name={dialog.name} id={dialog.id}/>
        )
    })

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