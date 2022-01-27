import Stats from './Stats';


export default function BandStats({ bands }) {
  
  return (
    <div>
      {bands.map((stat, i) => 
        <Stats key={stat + i} stats={stat}/>
      )}
    </div>
  );
}
