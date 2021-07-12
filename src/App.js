import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Blender3D from './components/PagesBase/Blender3D';
import GeneralWindow from './components/GeneralWindow';
import EditMod from './components/PagesBase/EditMod/EditMod';


const App = (props) => {
  return (
    <BrowserRouter> 
    <div className='App'>
      
      
      <div>
        <Route path='/Content' render={ () => <GeneralWindow  PostsEdit={props.PostsEdit} />}/>
        <Route path='/Blender3D' render={ () => <Blender3D />}/>
        <Route path='/EditMod' render={ () => <EditMod PostsEdit={props.PostsEdit} updateNewPostText={props.updateNewPostText}  addPost={props.addPost} newPostText={props.newPostText} PageList={props.PageList} newPostImageURL={props.newPostImageURL} newPostName={props.newPostName} updateNewPostName={props.updateNewPostName} updateNewPostImageURL={props.updateNewPostImageURL} />}/>

      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
