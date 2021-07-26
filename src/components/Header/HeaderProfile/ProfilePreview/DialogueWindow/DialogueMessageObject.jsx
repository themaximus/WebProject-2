import c from './DialogueMessageObject.module.css';



const DialogueMessageObject = (props) => {
    return (
        <div className={c.DialogueMessageObject}>
            <div className={c.avatar}></div>
            <div className={c.name}></div>
            {props.humanMessage}
        </div>
    )
}

export default DialogueMessageObject;