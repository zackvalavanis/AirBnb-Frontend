import { Link } from 'react-router-dom';
import { LogoutPage } from './LogoutPage'

export function Header () { 
  
  return (
    <header>
      <Link to='/'>Home</Link> | <Link to='/login'>Login</Link> | <Link to='/signup'>Signup</Link> | <LogoutPage />
    </header>
  )
}