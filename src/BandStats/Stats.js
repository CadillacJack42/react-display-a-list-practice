import React from 'react';
import './Stats.css';

export default function Stats(props) {
  return (<p className='description-proper'>{props.stats.name} is a {props.stats.genre} band comprised of {props.stats.memberCount} members. They have released {props.stats.studioAlbums} studio albums</p>);
}
