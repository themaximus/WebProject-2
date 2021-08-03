import c from './PostObject.module.css';
import PostHeader from './PostHeader';
import PostFooter from './PostFooter';
import PostContent from './PostContent';
import { BrowserRouter, Link, NavLink, Route } from 'react-router-dom';
import PostInside from './PostInside';



//export let Aboba = (props) => { <Route path={ props.namepost } render={ () =>   <PostInside/> } />

const PostObject = (props) => {

    

    return (
        
        <div className={c.PostObject} >
        
        <PostHeader  section={props.section} />
      
        <NavLink to={ props.namepost }>
            <PostContent namepost={props.namepost} 
            urlimage={props.urlimage} message={props.message} />
          </NavLink>
            <PostFooter/>
        </div>
        
    )
}

export default PostObject;

//передал фаил в EditMod