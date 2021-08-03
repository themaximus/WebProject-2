import Header from '../Header/Header';
import HeaderContainer from '../Header/HeaderContainer';
import c from './PostInside.module.css'
import PostInsideMessage from './PostIsnideContent/PostInsideMessage';


const PostInside = (props) => {
    return (
        <div className={c.PostInside}>
           <HeaderContainer/>
           <PostInsideMessage message= {props.message} urlimage = {props.urlimage} namepost={props.namepost} />
           <div className={c.PostImage}>
           
           </div>
           
           
            
        </div>
    );
}

export default PostInside;