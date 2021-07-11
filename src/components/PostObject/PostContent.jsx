import c from './PostContent.module.css'



const PostContent = (props) => {
    return (
        <div className={c.PostContent}>
            <div className={c.message}> { props.message} </div>
            <div className={c.NamePost}> { props.namepost }</div>
            
            <img src={props.urlimage} className={c.img} className={c.images} ></img> 
            
            <div className={c.opacity}></div>
        </div>
    )
}

export default PostContent;