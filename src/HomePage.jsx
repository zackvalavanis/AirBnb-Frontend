// import Tile  from './Tile'
import { Banner } from './Banner'
import './HomePage.css'
import Card from '@mui/material/Card';


export function HomePage () { 
  return ( 
    <div>
      <div className='home'>
      <Banner />
      <div className='home_section'>
        <Card />
        <Card />
        <Card />
      </div>
      <div className='home_section'>
        <Card />
        <Card />
        <Card />
      </div>
      </div>
      {/* <div className='tiles-container'>
        <Tile 
          title='Rooms'
          imageUrl='https://www.theparkhotels.com/images/site-specific/chennai/rooms-suites-min.jpg'
          link='/rooms'
          />
        <Tile 
          title='Login'
          imageUrl="https://cdn.shopify.com/s/files/1/1624/7461/files/Log-Home-Pros-and-cons_600x600.jpg?v=1643646621"
          link='/Login'
        />
      </div> */}
    </div>
  )
}