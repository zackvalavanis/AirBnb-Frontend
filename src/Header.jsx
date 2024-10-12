import { Link } from 'react-router-dom';
// import { LogoutPage } from './LogoutPage'
import './header.css'
import SearchIcon from '@mui/icons-material/Search'
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export function Header () { 
  
  return (
    <div>
    <header>
      <Link to='/'>
      <img 
        className='header_icon'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1280px-Airbnb_Logo_B%C3%A9lo.svg.png'
        alt=""
      />
      </Link>
      <div className='header_center'>
        <input className='text'/>
          <SearchIcon />
      </div>
      <div className='header_right'>
        <p>Become a Host</p>
        <LanguageIcon />
        <AccountCircleIcon />
        <ExpandMoreIcon />
      </div>
{/* 

      <Link to='/'>Home</Link> | <Link to='/rooms'>Available Rooms</Link> | <Link to='/reservations'>My Reservations</Link> | <Link to='/login'>Login</Link> | <Link to='/signup'>Signup</Link> | <LogoutPage />  */}
    </header>

    </div>
  )
}