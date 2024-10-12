import './Banner.css';
import { Button } from '@mui/material';
import { useState } from 'react'
import { Search } from './Search'


export function Banner() { 
  const [ showSearch, setShowSearch ] = useState(false);

  const showHide = () => { 
    setShowSearch(!showSearch);
  }

  return (
    <div className='banner'>
      <div className='banner_search'>
        {showSearch && <Search />}
        <Button
          onClick={showHide}
          variant='outlined'
          className='banner_searchButton'
          >{showSearch ? 'Hide' : "Show Search"}
        </Button>
      </div>
      <div className='banner_info'>
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of getaway to uncover the hidden gems near you.
        </h5>
        <Button
          variant='outlined'>
          Explore Nearby</Button>


      </div>
    </div>


  )
}