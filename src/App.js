import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import GeneralWindow from './components/GeneralWindow';

const App = (props) => {
  return (
    <BrowserRouter> 
    <div className='App'>
      
      
      <div>
        <Route path='/Content' render={ () => <GeneralWindow />} />

      </div>
      
      
    </div>
    </BrowserRouter>);
}

export default App;
