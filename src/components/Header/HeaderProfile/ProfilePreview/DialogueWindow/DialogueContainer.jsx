import DialogueInput from './DialogueInput';
import DialogueList from './DialogueList';
import c from './DialogueContainer.module.css';
import DialogueWindow from './DialogueWindow';









const DialogueContainer = (props) => {
    return (
        <div className={c.DialogueContainer} id='DialogueContainer'>
            <DialogueList DialogueList={props.DialogueList}/>
            <DialogueWindow PersonalMessage={props.PersonalMessage}/>
            <DialogueInput newPersonalMessage={props.newPersonalMessage} dispatch={props.dispatch}/>
        </div>
    )
}

export default DialogueContainer;