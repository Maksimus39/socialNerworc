import classes from './../Dialogs.module.css'
import {PropsMessage} from "../../../redux/state";


export const Message = (props: PropsMessage) => {
    return <div className={classes.message}>{props.message}</div>
}
