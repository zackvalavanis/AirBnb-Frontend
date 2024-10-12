import './Card.css'
import { Link } from 'react-router-dom'

export function Card({ src, title, description, link}) { 
  return (
    <div className='card'>
        <Link to={link} className='link'>
      <img src={src} alt='' />
       </Link>
      <div className='card_info'>
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  )
}