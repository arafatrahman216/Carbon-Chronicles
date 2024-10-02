import HeatMap1 from "./components/Heatmap1";
import HeatMap2 from "./components/Heatmap2";

export default function App() {
  return (
    <div className="App">
      <h1>React Simple Maps Heatmap</h1>
      <HeatMap1 />
      <h2 style={{ marginTop: "2rem" }}>React Simple Maps Heatmap with Markers</h2>
      <HeatMap2 />
      
    </div>
  );
}