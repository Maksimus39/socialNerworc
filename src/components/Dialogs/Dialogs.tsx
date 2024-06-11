import classes from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog}>
                    Max
                </div>
                <div className={classes.dialog}>
                    Larisa
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Bogdan
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