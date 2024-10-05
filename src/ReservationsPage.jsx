import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export function ReservationsPage() {
  const users = useLoaderData();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking for JWT in local storage
    const jwt = localStorage.getItem("jwt");
    setIsLoggedIn(!!jwt); // Set logged in status based on JWT presence
  }, []);

  const handleShow = (user) => {
    console.log('handleShow', user);
    navigate(`/user/${user.id}`);
  }

  // If user is not logged in, prompt them to log in
  if (!isLoggedIn) {
    return (
      <div>
        <h1>You must be logged in to view your reservations.</h1>
        <button onClick={() => navigate('/login')}>Login</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Reservations.</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.rooms[0]?.address}</h1>
          {user.rooms[0]?.room_images[0] && (
            <img src={user.rooms[0].room_images[0].url} alt="Room" />
          )}
          <p>Starting at: {user.reservations[0]?.start_date}</p>
          <p>Ending at: {user.reservations[0]?.end_date}</p>
          <p>Price: {user.reservations[0].price}</p>
          <p>Tax: {user.reservations[0].tax}</p>
          <p>Total: {user.reservations[0].total}</p>
          <button onClick={() => handleShow(user)}>More Information on your Booking</button>
        </div>
      ))}
    </div>
  );
}
