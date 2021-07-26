

import c from './EditMod.module.css'
import FrontOpacity from "../../FrontNewsBoard/FrontOpacity/FrontOpacity";
import Header from "../../Header/Header";
import PostObject from "../../PostObject/PostObject";
import EditEnterText from "./EditEnterText";







const EditMod = (props) => {

    
    
    let messagePostObject = props.PostsEdit.map ( m => <PostObject message={m.message} id={m.id} namepost={m.namepost} urlimage={m.urlimage} section={m.section} /> ) ;

    return (
        <div className={c.EditMod}>
            
           <Header dispatch={props.dispatch} PersonalMessage={props.PersonalMessage} newPersonalMessage={props.newPersonalMessage} DialogueList={props.DialogueList}/>
           <FrontOpacity/>
           
           
           <EditEnterText   newPostText={props.newPostText} PageList={props.PageList} newPostImageURL={props.newPostImageURL}  newPostName={props.newPostName} dispatch={props.dispatch} newPostSection={props.newPostSection}  />
          {messagePostObject}
          
          
          
          
          
           
           
        </div>
    )
}

export default EditMod;

//отправлено в app js