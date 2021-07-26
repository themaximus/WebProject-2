import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blender3D from './components/PagesBase/Blender3D';
import GeneralWindow from './components/GeneralWindow';
import EditMod from './components/PagesBase/EditMod/EditMod';
import Article from './components/PagesBase/Article/Article';





const App = (props) => {
  
  

  return (
    <BrowserRouter> 
    <div className='App'>

      <div>
        <Route path='/Content' render={ () => <GeneralWindow dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage}   PostsEdit={props.State.PostsEdit.posts} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList} />}/>
        <Route path='/Blender3D' render={ () => <Blender3D dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage}  newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList} PostsEditBlender3d={props.State.PostsEdit.postsBlender3d}/>}/>
        <Route path='/Article' render={ () => <Article PostsEdit={props.State.PostsEdit.posts} newPostText={props.State.PostsEdit.newPostText} PageList={props.State.PageList.PageList} newPostName={props.State.PostsEdit.newPostName} dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList} newPostImageURL={props.State.PostsEdit.newPostImageURL} newPostSection={props.State.PostsEdit.newPostSection} PostsEditArticle={props.State.PostsEdit.postsArticle}/>}/>
        <Route path='/EditMod' render={ () => <EditMod PostsEdit={props.State.PostsEdit.posts} newPostText={props.State.PostsEdit.newPostText} PageList={props.State.PageList.PageList} newPostName={props.State.PostsEdit.newPostName} dispatch={props.dispatch} PersonalMessage={props.State.Messanger.PersonalMessage} newPersonalMessage={props.State.Messanger.newPersonalMessage} DialogueList={props.State.Messanger.DialogueList} newPostImageURL={props.State.PostsEdit.newPostImageURL} newPostSection={props.State.PostsEdit.newPostSection}/>} />

      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
