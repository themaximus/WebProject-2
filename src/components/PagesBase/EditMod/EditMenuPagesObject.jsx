import React from "react"
import c from './EditMenuPagesObject.module.css'; 




const EditMenuPagesObject = (props) => {

    return (
        <div className={c.EditMenuPagesObject}   >
           <div className={c.PagesObject} ><a> {props.pageName} </a></div>	
                
                </div>
    )
}

export default EditMenuPagesObject;