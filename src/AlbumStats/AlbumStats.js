import Album from './Album';
import './Album.css';

export default function AlbumStats(props) {
  return <div className='album-container'>
    <h2 className='album-header'>Albums</h2>
    {
      props.stats.map((stat, i) => 
        <Album key={stat + i} stat={stat} />
      ) 
    }
    <hr></hr>
  </div>;
}
