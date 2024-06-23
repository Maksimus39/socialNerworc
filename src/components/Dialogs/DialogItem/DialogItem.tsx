import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogsPropsItem} from "../../../redux/state";


export const DialogsItem = (props: DialogsPropsItem) => {

    const patch = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <img src={props.img} alt={props.name} className={classes.dialogImage}/>
            <NavLink
                to={patch}>
                {props.name}
            </NavLink>
        </div>
    )
}


