

import c from './EditMod.module.css'
import FrontOpacity from "../../FrontNewsBoard/FrontOpacity/FrontOpacity";
import Header from "../../Header/Header";
import PostObject, { Aboba } from "../../PostObject/PostObject";
import EditEnterText from "./EditEnterText";
import EditEnterTextContainer from './EditEnterTextContainer';
import PostInside from '../../PostObject/PostInside';
import { Route } from 'react-router-dom';







const EditMod = (props) => {

    let Aboba = (props) => { <Route path={ props.namepost } render={ () =>   <PostInside/> } />
}
    
    let messagePostObject = props.PostsEdit.map ( m => <PostObject message={m.message} id={m.id} namepost={m.namepost} urlimage={m.urlimage} section={m.section} />) ;

    return (
        <div className={c.EditMod}>
            
           <Header dispatch={props.dispatch} PersonalMessage={props.PersonalMessage} newPersonalMessage={props.newPersonalMessage} DialogueList={props.DialogueList} PageList={props.PageList} />
           <FrontOpacity/>
           
           
           <EditEnterTextContainer  newPostText={props.newPostText} PageList={props.PageList} newPostImageURL={props.newPostImageURL}  newPostName={props.newPostName} dispatch={props.dispatch}  />
          {messagePostObject}
          
          
          
          
          
           
           
        </div>
    )
}

export default EditMod;

//отправлено в app js