import DialogueMessageObject from './DialogueMessageObject';
import c from './DialogueWindow.module.css';



const DialogueWindow = () => {
    return (
        <div className={c.DialogueWindow}>
            <DialogueMessageObject/>
        </div>
    )
}

export default DialogueWindow;