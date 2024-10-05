import HeatMap1 from "./components/Heatmap1";
import HeatMap2 from "./components/Heatmap2";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import CarbonFootprint from "./components/CarbonFootprint";
import Navbar2 from "./components/Navbar2";
import Chapter from "./components/Chapter";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar2 />
        <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CarbonFootprint />}/>
          {/* <Route path='/calculator' element={}/>*/}
          <Route path='/explore' element={<Chapter/>}/>
          {/*<Route path='/heatmap' element={}/>
          <Route path='/joinus' element={}/> */}
        </Routes>
        </div>
      </div>
      {/* <h1>React Simple Maps Heatmap</h1>
      <HeatMap1 />
      <h1 className="App-header">React Simple Maps</h1>
      <HeatMap2 /> */}
    </Router>
  );
}