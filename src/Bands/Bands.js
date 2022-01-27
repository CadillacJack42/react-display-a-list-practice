import Band from './Band';

export default function Bands(props) {
    
  return (
    <div>
      <h2>My Current Top 5 Bands</h2>
      {props.bands.map((band, i) => 
        <Band key={band + i} bandName={band} />
      )
      }
      <hr></hr>
    </div>
  );
}
