import React from 'react';

export default function Album(props) {
  return <div>
    <h4>{props.stat.name}s Top Albums Are: </h4>
    <ol>
      <li>{props.stat.topAlbums.one}</li>
      <li>{props.stat.topAlbums.two}</li>
      <li>{props.stat.topAlbums.three}</li>
    </ol>
  </div>;
}
