import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>

                <div className={classes.dialog}>
                    <NavLink to="/dialogs/1">
                        Max
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">
                        Larisa
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">
                        Andrey
                    </NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">
                        Bogdan
                    </NavLink>
                </div>

            </div>

            <div className={classes.messages}>
                <div className={classes.message}>Привет, семья! Как ваши дела сегодня?</div>
                <div className={classes.message}>Здравствуй, дорогой! Всё хорошо, занимаемся подготовкой к ужину.</div>
                <div className={classes.message}>Привет, всем! Я только что вернулся с тренировки, было классно.</div>
                <div className={classes.message}>Привет, пап! Я заканчиваю домашнее задание, скоро буду свободен.</div>
            </div>

        </div>
    )
}