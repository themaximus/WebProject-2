

import DialogueMessageObject from './DialogueMessageObject';
import c from './DialogueWindow.module.css';



const DialogueWindow = (props) => {
    
     let HumanMessageObject = props.PersonalMessage.map ( de => <DialogueMessageObject humanMessage={de.humanMessage} id={de.id} /> ) ;

    return (
        <div className={c.DialogueWindow}>
            {HumanMessageObject}
            
        </div>
    )
}

export default DialogueWindow;