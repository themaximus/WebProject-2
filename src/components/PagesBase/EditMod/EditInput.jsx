import React from "react"
import c from './EditInput.module.css'; 




const EditInput = () => {
   
    let newPostElement = React.createRef();

    return (
        <div className={c.EditInputContaner}   >
           	 <textarea className={c.textarea} ref={newPostElement} ></textarea>  
                
                </div>
    )
}

export default EditInput;