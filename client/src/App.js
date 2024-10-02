import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path='/calculator' element={}/>
          <Route path='/calculator' element={}/>
          <Route path='/explore' element={}/>
          <Route path='/heatmap' element={}/>
          <Route path='/join' element={}/> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
