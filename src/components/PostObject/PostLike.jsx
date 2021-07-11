import { likecounter, likecounter2 } from './like';
import c from './PostLike.module.css'


const PostLike = (props) => {
    return (
        <div className={c.PostLike} id='PostLikeNumber'>
             <img src="https://i.ibb.co/wBcgpyD/6ccf204311aafe52e7c7556afbe57921.png" className={c.img} onClick={likecounter} id='img' ></img>

             <img src="https://i.ibb.co/vcTQ281/d1ot.png" className={c.img2} onClick={likecounter2} id='img2' ></img>
             
        </div>
    )
}

export default PostLike;