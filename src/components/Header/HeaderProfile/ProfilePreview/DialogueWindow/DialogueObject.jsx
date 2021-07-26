import c from './DialogueObject.module.css';



const DialogueObject = (props) => {
    return (
        <div className={c.DialogueObject}>
            <div className={c.avatar}><img src={props.avatar}></img></div>
            <div className={c.nameDialogue}>{props.nameDialogue}</div>
            <div className={c.status}>offline</div>

            
        </div>
    )
}

export default DialogueObject;