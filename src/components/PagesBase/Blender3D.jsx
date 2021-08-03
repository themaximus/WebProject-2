import c from "./Blender3D.module.css";

import Header from "../Header/Header"
import FrontOpacity from "../FrontNewsBoard/FrontOpacity/FrontOpacity";
import PostObject from "../PostObject/PostObject";




const Blender3D = (props) => {

    let messagePostObject = props.PostsEditBlender3d.map ( m => <PostObject message={m.message} id={m.id} namepost={m.namepost} urlimage={m.urlimage} section={m.section} /> ) 

    return (
        <div className={c.Blender3D} >
           <Header dispatch={props.dispatch} PersonalMessage={props.PersonalMessage} newPersonalMessage={props.newPersonalMessage} DialogueList={props.DialogueList} PageList={props.PageList}/>
           <FrontOpacity/>

            <div className={c.postsBlock}>{messagePostObject}</div>

        </div>
    )
}

export default Blender3D;