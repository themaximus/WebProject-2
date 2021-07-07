

import c from './EditMod.module.css'
import FrontOpacity from "../../FrontNewsBoard/FrontOpacity/FrontOpacity";
import Header from "../../Header/Header";
import PostObject from "../../PostObject/PostObject";
import EditEnterText from "./EditEnterText";
import EditInput from "./EditInput";
import EditModMenu from "./EditModMenu";




const EditMod = (props) => {

    let messagePostObject = props.PostsEdit.map ( m => <PostObject message={m.message}/> ) ;

    return (
        <div className={c.EditMod}>
            
           <Header/>
           <FrontOpacity/>
           <EditInput/>
           <EditModMenu/>
           <EditEnterText/>
          { messagePostObject }
          
          
          
           
           
        </div>
    )
}

export default EditMod;

//отправлено в app js