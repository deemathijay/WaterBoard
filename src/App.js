import {BrowserRouter ,Routes ,Route , Link} from 'react-router-dom';
import './App.css';
import IframeComponent from './Components/IframeComponent';
import TopBar from './Components/TopBar';
import App1 from './Components/App1';





function App() {
  return (
    <div className="App">
      <div className='main-div'>
        <IframeComponent />
        <div>
        <TopBar/>
        <App1/>
        </div>
        {/* <BrowserRouter>
        </BrowserRouter> */}
      </div>

    </div>
  );
}

export default App;
