import DialogueInput from './DialogueInput';
import DialogueList from './DialogueList';
import c from './DialogueContainer.module.css';
import DialogueWindow from './DialogueWindow';









const DialogueContainer = () => {
    return (
        <div className={c.DialogueContainer} id='DialogueContainer'>
            <DialogueList/>
            <DialogueWindow/>
            <DialogueInput/>
        </div>
    )
}

export default DialogueContainer;