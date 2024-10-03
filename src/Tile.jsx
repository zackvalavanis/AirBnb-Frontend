import { Link } from 'react-router-dom';
import './Tile.css';

const Tile = ({ title, imageUrl, link }) => { 
  return (
    <Link to={link} className='tile'>
      <img src={imageUrl} alt={title} className='tile-image' />
      <h2 className='tile-title'>{title}</h2>
    </Link>
  )
}

export default Tile;