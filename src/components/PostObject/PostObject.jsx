import c from './PostObject.module.css';
import { posttext } from './../../Redux/STATE.js';

const PostObject = (props) => {
    return (
        <div className={c.PostObject} >
            {props.posttext}
            
        </div>
    )
}

export default PostObject;

//передал фаил в EditMod