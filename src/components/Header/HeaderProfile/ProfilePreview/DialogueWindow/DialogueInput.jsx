import c from './DialogueInput.module.css';
import React from "react";
import { addHumanMessageActionCreator, onHumanMessageChangeActionCreator } from '../../../../../Redux/PersonalMessageReducer';



const DialogueInput = (props) => {

    let newHumanMessageElement = React.createRef();

    let AddHumanMessage = () => {
        let humanMessage = newHumanMessageElement.current.value;
        
       props.dispatch(addHumanMessageActionCreator(humanMessage));  
      };


      let onHumanMessageChange = () => {
        let humanMessage = newHumanMessageElement.current.value;
        props.dispatch(onHumanMessageChangeActionCreator(humanMessage));
        //message
      }


    return (
        <div className={c.DialogueInput}>
            <textarea className={c.input} placeholder='Напечатайте что нибудь...' ref={newHumanMessageElement} onChange={onHumanMessageChange} value={props.newPersonalMessage} ></textarea>
            <div className={c.buttonSend} onClick={AddHumanMessage}  ><img
          src='https://i.ibb.co/vDbnpXn/enviar-icone.png'
          className={c.img}
        ></img></div>
            <div className={c.buttonSmile}><img src='https://i.ibb.co/gPGVy3T/anime-emoji-v1.png' className={c.img2}></img></div>
            <div className={c.buttonContent}><img src='https://i.ibb.co/5Gc6fgm/46159.png' className={c.img3}></img></div>
        </div>
    )
}

export default DialogueInput;