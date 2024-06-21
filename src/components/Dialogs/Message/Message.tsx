import classes from './../Dialogs.module.css'


export type PropsMessage = {
    message: string
    id: number
}

export const Message = (props: PropsMessage) => {
    return <div className={classes.message}>{props.message}</div>
}
