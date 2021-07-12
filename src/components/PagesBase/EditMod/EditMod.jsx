

import c from './EditMod.module.css'
import FrontOpacity from "../../FrontNewsBoard/FrontOpacity/FrontOpacity";
import Header from "../../Header/Header";
import PostObject from "../../PostObject/PostObject";
import EditEnterText from "./EditEnterText";
import EditInput from "./EditInput";
import EditModMenu from "./EditModMenu";





const EditMod = (props) => {
    
    let messagePostObject = props.PostsEdit.map ( m => <PostObject message={m.message} id={m.id} namepost={m.namepost} urlimage={m.urlimage} /> ) ;

    return (
        <div className={c.EditMod}>
            
           <Header/>
           <FrontOpacity/>
           
           
           <EditEnterText addPost={props.addPost} updateNewPostText={props.updateNewPostText} newPostText={props.newPostText} PageList={props.PageList} newPostImageURL={props.newPostImageURL}  newPostName={props.newPostName} updateNewPostName={props.updateNewPostName} updateNewPostImageURL={props.updateNewPostImageURL} />
          { messagePostObject }
          
          
          
          
          
           
           
        </div>
    )
}

export default EditMod;

//отправлено в app js