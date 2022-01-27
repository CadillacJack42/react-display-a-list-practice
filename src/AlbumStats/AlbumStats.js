import Album from './Album';

export default function AlbumStats(props) {
  return <div>
    <h2>Albums</h2>
    {
      props.stats.map((stat, i) => 
        <Album key={stat + i} stat={stat} />
      ) 
    }
    <hr></hr>
  </div>;
}
