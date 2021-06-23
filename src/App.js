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
        <Route path='/Content' render={ () => <GeneralWindow />}/>
        <Route path='/Blender3D' render={ () => <Blender3D />}/>
        <Route path='/EditMod' render={ () => <EditMod />}/>

      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
