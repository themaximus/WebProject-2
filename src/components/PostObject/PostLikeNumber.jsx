import c from './PostLikeNumber.module.css'
import { likecounter  } from './like.js';

const PostLikeNumber = (props) => {
    return (
        <div className={c.PostLikeNumber}>
             <div id='PostLikeNumber'>0</div>
        </div>
    )
}

export default PostLikeNumber;