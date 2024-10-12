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
          link='/Rooms'
        />
        <Card 
          src='https://marylousobel.com.au/wp-content/uploads/2018/07/business-133-copy-min-scaled-2.jpg'
          title='Login'
          description='Login to save your vacations'
          link='/Login'
        />
        <Card
          src='https://www.bhg.com/thmb/hkhPW8rieqTtSQqv48zoE9r2Dwo=/6000x0/filters:no_upscale():strip_icc()/BHG109001-2_preview-b0651b761f954710a0e5e17388a16d6d.jpg'
          title='Signup'
          description="Signup to start"
          link='/signup'
        />
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