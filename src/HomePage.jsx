import { Banner } from './Banner'
import './HomePage.css'
import { Card } from './Card'

export function HomePage () { 
  return ( 
    <div>
      <div className='home'>
      <Banner />
      <div className='home_section'>
        <Card 
          src='https://blog.canadianloghomes.com/wp-content/uploads/2020/10/modern-rustic-living-room-ideas.jpg'
          title='Rooms'
          description='Find your dream vacation home'
          price='40'
          link='/Rooms'
        />
        {/* <Card />
        <Card /> */}
      </div>
      <div className='home_section'>
        {/* <Card />
        <Card />
        <Card /> */}
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