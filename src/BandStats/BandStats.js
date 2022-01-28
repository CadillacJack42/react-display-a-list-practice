import Stats from './Stats';
import './Stats.css';


export default function BandStats({ bands }) {
  
  return (
    <div className='description-container'>
      <h2 className='description-header'>Band Descriptions</h2>
      {bands.map((stat, i) => 
        <Stats key={stat + i} stats={stat}/>
      )}
      <hr></hr>
    </div>
  );
}
