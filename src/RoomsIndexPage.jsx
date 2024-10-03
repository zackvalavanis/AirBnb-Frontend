import { useLoaderData, useNavigate} from 'react-router-dom';

export function RoomsIndexPage () { 
  const rooms = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (room) => { 
    console.log('handleShow', room);
    navigate(`/rooms/${room.id}`)
  }

  return (
    <div>
      <h1>All Rooms</h1>
        {
          rooms.map((room) => (
            <div key={room.id}>
              <img src={room.room_images[0].url} />
              <h1>Address: {room.address}</h1>
              <h1>City: {room.city}</h1>
              <h1>State: {room.state}</h1>
              <h1>price: {room.price}</h1>
              <h1>description: {room.description}</h1>
              <h1>Home Details</h1>
              <p>Home Type: {room.home_type}</p>
              <p>Room Type: {room.room_type}</p>
              <p>Total Occupancy: {room.total_occupancy}</p>
              <p>Total Bedrooms: {room.total_bedrooms}</p>
              <p>Total Bathrooms: {room.total_bathrooms}</p>
              <button onClick={() => handleShow(room)}>More Info</button>
            </div>
          ))
        }
    </div>
  )
  }
