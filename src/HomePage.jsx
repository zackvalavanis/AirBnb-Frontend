import { useLoaderData } from 'react-router-dom'
import Tile  from './Tile'


export function HomePage () { 
  return ( 
    <div>
      <h1>Welcome to our Home Page</h1>
      <div className='tiles-container'>
        <Tile 
          title='Rooms'
          imageUrl='https://waclightinglights.com/dw/image/v2/BHCF_PRD/on/demandware.static/-/Sites-site-catalog-lny-us/default/dw7283b02d/images/rooms/generic-shopbyroom-bedroom-card.png?sw=588&sh=323&sm=fit&sfrm=jpg'
          link='/rooms'
          />
          



      </div>
    </div>
  )
}