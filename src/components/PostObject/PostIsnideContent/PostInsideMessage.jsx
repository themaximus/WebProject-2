import c from './PostInsideMessage.module.css';

const PostInsideMessage = (props) => {
    return (
        <div className={c.PostInsideMessage}>
            <img src= {props.urlimage}></img>
           <div className={c.Name}>{props.namepost}</div>
             {props.message}
        </div>
    )
}

export default PostInsideMessage;               