import React from 'react';

export default function Album(props) {
  return <div className='each-band'>
    <h4 className='band-name'>{props.stat.name}s Top Albums Are: </h4>
    <ol>
      <li className='list-items'>{props.stat.topAlbums.one}</li>
      <li className='list-items'>{props.stat.topAlbums.two}</li>
      <li className='list-items'>{props.stat.topAlbums.three}</li>
    </ol>
  </div>;
}
