import React from 'react';

export default function Stats(props) {
  return (<p>{props.stats.name} is a {props.stats.genre} band comprised of {props.stats.memberCount} members. They have {props.stats.studioAlbums} studio albums</p>);
}
