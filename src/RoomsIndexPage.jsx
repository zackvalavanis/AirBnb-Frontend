import { useLoaderData, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react'
import './RoomsIndexPage.css'

export function RoomsIndexPage () { 
  const rooms = useLoaderData();
  const navigate = useNavigate();
  const [user, setUser ] = useState(null);

  useEffect (() => { 
    const userData = localStorage.getItem("user");
    if (userData){ 
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleShow = (room) => { 
    console.log('handleShow', room);
    navigate(`/rooms/${room.id}`)
  }

  if (!user) { 
    return (
      <div>
        <h1>Please log in to view your rooms.</h1>
        <button onClick={() => navigate('./login')}>Login</button>
      </div>
    )
  }

  return (
    <div className='room_index'>
      <h1>All Rooms</h1>
        {
          rooms.map((room) => (
            <div key={room.id}>
              <img src={room.room_images[0].url} />
              <h1>Address: {room.address}</h1>
              <h1>City: {room.city}</h1>
              <h1>State: {room.state}</h1>
              <h1>price: ${room.price}</h1>
              <p>description: {room.description}</p>
              <div className='more_info_button'>
              <button onClick={() => handleShow(room)}>More Info & Booking</button>
              </div>
            </div>
          ))
        }
    </div>
  )
  }
