import c from './PostFooter.module.css'
import PostLike from './PostLike'
import PostLikeNumber from './PostLikeNumber'
import PostRepost from './PostRepost'
import PostRepostNumber from './PostRepostNumber'
import PostTime from './PostTime'


const PostFooter = () => {
    return (
        <div className={c.PostFooter}>
            <PostTime/>
            <PostRepostNumber/>
            <PostRepost/>
            <PostLikeNumber/>
            <PostLike/>
        </div>
    )
}

export default PostFooter;