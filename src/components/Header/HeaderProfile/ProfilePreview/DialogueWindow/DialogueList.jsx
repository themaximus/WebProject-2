import c from './DialogueList.module.css';
import DialogueObject from './DialogueObject';





const DialogueList = (props) => {
    let DialogueElement = props.DialogueList.map ( de => <DialogueObject id={de.id} nameDialogue={de.nameDialogue} avatar={de.avatar} /> ) ;
    return (
        <div className={c.DialogueList}>
           { DialogueElement }
        </div>
    )
}

export default DialogueList;