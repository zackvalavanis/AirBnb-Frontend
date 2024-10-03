import { Link } from 'react-router-dom';

export function Header () { 
  
  return (
    <header>
      <Link to='/'>Home</Link> | <Link to='/signup'>Signup</Link>
    </header>
  )
}