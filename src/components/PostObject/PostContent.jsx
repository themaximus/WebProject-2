import c from './PostContent.module.css'


const PostContent = (props) => {
    return (
        <div className={c.PostContent}>
            { props.message}
        </div>
    )
}

export default PostContent;