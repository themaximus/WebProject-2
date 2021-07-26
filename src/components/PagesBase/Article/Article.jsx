import c from "./Article.module.css";
import FrontOpacity from "../../FrontNewsBoard/FrontOpacity/FrontOpacity";
import Header from "../../Header/Header";
import PostObject from "../../PostObject/PostObject";



const Article = (props) => {

    
    
    let messagePostObject = props.PostsEditArticle.map ( m => <PostObject message={m.message} id={m.id} namepost={m.namepost} urlimage={m.urlimage} section={m.section} /> ) ;

    return (
        <div >
            
           <Header dispatch={props.dispatch} PersonalMessage={props.PersonalMessage} newPersonalMessage={props.newPersonalMessage} DialogueList={props.DialogueList}/>
           <FrontOpacity/>

           <div className={c.postsBlock}>{messagePostObject}</div>
           
        </div>
    )
}

export default Article;