import './Card.css'
import { Link } from 'react-router-dom'

export function Card({ src, title, description, link}) { 
  return (
  <Link to={link} className='link'>
    <div className='card'>
        <img src={src} alt='' />
      <div className='card_info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  </Link>
  )
}