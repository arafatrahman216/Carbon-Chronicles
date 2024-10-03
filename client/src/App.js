import HeatMap1 from "./components/Heatmap1";
import HeatMap2 from "./components/Heatmap2";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import CarbonFootprint from "./components/CarbonFootprint";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<CarbonFootprint />}/>
          {/* <Route path='/calculator' element={}/>
          <Route path='/explore' element={}/>
          <Route path='/heatmap' element={}/>
          <Route path='/join' element={}/> */}
        </Routes>
      </div>
      <h1>React Simple Maps Heatmap</h1>
      <HeatMap1 />
      <h1 className="App-header">React Simple Maps</h1>
      <HeatMap2 />
    </Router>
  );
}