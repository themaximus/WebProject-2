import PostAvatar from './PostAvatar'
import c from './PostHeader.module.css'
import PostOptions from './PostOptions'
import PostPage from './PostPage'


const PostHeader = () => {
    return (
        <div className={c.PostHeader}>
            <PostAvatar/> 
            <PostPage/>
            <PostOptions/>
        </div>
    )
}

export default PostHeader;