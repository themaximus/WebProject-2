import c from './PostPage.module.css'


const PostPage = (props) => {
    return (
        <div className={c.PostPage}>
            <p>{props.section}</p>
        </div>
    )
}

export default PostPage;