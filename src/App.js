import './App.css';
// import your arrays here
import { bands } from './array-one';
import Bands from './Bands/Bands';
import { bandObjects } from './array-two';
import BandStats from './BandStats/BandStats';

function App() {
  // console.log(bandObjects);
  return (
    <div className="App">
      <Bands bands={bands}/>
      <BandStats bands={bandObjects}/>
    </div>
  );
}

export default App;
