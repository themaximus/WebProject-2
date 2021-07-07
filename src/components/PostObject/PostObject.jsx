import c from './PostObject.module.css';

import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';

const PostObject = (props) => {

    

    return (
        <div className={c.PostObject}  >
            <PostHeader />
            <PostContent message={props.message} />
            
            <PostFooter/>
        </div>
    )
}

export default PostObject;

//передал фаил в EditMod