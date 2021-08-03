import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blender3D from './components/PagesBase/Blender3D';
import GeneralWindow from './components/GeneralWindow';
import EditMod from './components/PagesBase/EditMod/EditMod';
import Article from './components/PagesBase/Article/Article';
import PostInside from './components/PostObject/PostInside';

//let PostObjectContent = State.PostsEdit.postLinkContent.map (  n =>  <PostInside id={n.id} linkPost={n.linkPost} message={n.message}/> ) ;



const App = (props) => {

 
  
  let newPage= props.State.PostsEdit.posts.map ( z => <Route path= { '/' + z.namepost} render={ () =>   <PostInside  message={z.message} urlimage={z.urlimage} namepost={z.namepost} /> } />) ;
 


  return (
    <BrowserRouter> 
     
    <div className='App'>

  
   
      <div>
    {newPage}
      

      <Route path='/PostContent' render={ () =>   <PostInside PostsEdit={props.State.PostsEdit.posts} PageList={props.State.PageList} dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList}  />}/>
        <Route path='/Content' render={ () => <GeneralWindow dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage}   PostsEdit={props.State.PostsEdit.posts} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList}  PageList={props.State.PageList} />}/>
        <Route path='/Blender3D' render={ () => <Blender3D dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage}  newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList} PostsEditBlender3d={props.State.PostsEdit.postsBlender3d} PageList={props.State.PageList}/>}/>
        <Route path='/Article' render={ () => <Article PostsEdit={props.State.PostsEdit.posts} newPostText={props.State.PostsEdit.newPostText} PageList={props.State.PageList.PageList} newPostName={props.State.PostsEdit.newPostName} dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList} newPostImageURL={props.State.PostsEdit.newPostImageURL} newPostSection={props.State.PostsEdit.newPostSection} PostsEditArticle={props.State.PostsEdit.postsArticle}/>}/>
        <Route path='/EditMod' render={ () => <EditMod PostsEdit={props.State.PostsEdit.posts} PageList={props.State.PageList} dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList}  />} />

      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
