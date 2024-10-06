import { useLoaderData } from 'react-router-dom';

export function RoomsShowPage() { 
  const room = useLoaderData(); // This will get the room data











  
  return ( 
    <div>
      <h1>Room Details</h1>
      <img src={room.room_images[0]?.url} alt="Room" /> {/* Safely access room image */}
      <h2>Address: {room.address}</h2>
      <h3>City: {room.city}</h3>
      <h3>State: {room.state}</h3>
      <h3>Price: ${room.price}</h3>
      <p>Description: {room.description}</p>
      <h4>Home Details</h4>
      <p>Home Type: {room.home_type}</p>
      <p>Room Type: {room.room_type}</p>
      <p>Total Occupancy: {room.total_occupancy}</p>
      <p>Total Bedrooms: {room.total_bedrooms}</p>
      <p>Total Bathrooms: {room.total_bathrooms}</p>
      <button>Reserve Home</button>
    </div>
  );
}
