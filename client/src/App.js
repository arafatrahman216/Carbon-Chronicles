import HeatMap1 from "./components/Heatmap1";
import HeatMap2 from "./components/Heatmap2";
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './components/Home';

export default function App() {
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
      <h1>React Simple Maps Heatmap</h1>
      <HeatMap1 />
      <h2 style={{ marginTop: "2rem" }}>React Simple Maps Heatmap with Markers</h2>
      <HeatMap2 />
    </Router>
  );
}