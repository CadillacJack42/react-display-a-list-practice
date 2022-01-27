import './App.css';
// import your arrays here
import { bands } from './array-one';
import Bands from './Bands/Bands';

function App() {
  return (
    <div className="App">
      <Bands bands={bands}/>
    </div>
  );
}

export default App;
