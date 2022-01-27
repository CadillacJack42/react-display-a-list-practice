import Band from './Band';
import './Bands.css';

export default function Bands(props) {
    
  return (
    <div>
      <h2 className='band-name'>My Current Top 5 Bands</h2>
      {props.bands.map((band, i) => 
        <Band key={band + i} bandName={band} />
      )
      }
      <hr></hr>
    </div>
  );
}
