import './App.css';
// import your arrays here
import { bands } from './array-one';
import Bands from './Bands/Bands';
import { bandObjects } from './array-two';
import BandStats from './BandStats/BandStats';
import { nestedBandObjects } from './array-three';
import AlbumStats from './AlbumStats/AlbumStats';

function App() {
  // console.log(bandObjects);
  return (
    <div className="App">
      <Bands bands={bands} />
      <BandStats bands={bandObjects} />
      <AlbumStats stats={nestedBandObjects} />
    </div>
  );
}

export default App;
