import Stats from './Stats';


export default function BandStats({ bands }) {
  
  return (
    <div>
      <h2>Band Descriptions</h2>
      {bands.map((stat, i) => 
        <Stats key={stat + i} stats={stat}/>
      )}
      <hr></hr>
    </div>
  );
}
