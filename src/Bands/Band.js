import React from 'react';
import './Bands.css';

export default function Band(props) {

  return <p className='band-name name'>{props.bandName}</p>;
}
