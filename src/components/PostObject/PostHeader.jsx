import PostAvatar from './PostAvatar'
import c from './PostHeader.module.css'
import PostOptions from './PostOptions'
import PostPage from './PostPage'


const PostHeader = (props) => {
    return (
        <div className={c.PostHeader}>
            <PostAvatar/> 
            <PostPage section={props.section}/>
            <PostOptions/>
        </div>
    )
}

export default PostHeader;