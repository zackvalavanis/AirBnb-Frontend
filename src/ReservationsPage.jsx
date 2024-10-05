import { useLoaderData, useNavigate } from 'react-router-dom'


export function ReservationsPage () { 
  const users = useLoaderData();
  const navigate = useNavigate();


  const handleShow = (user) => { 
    console.log('handleShow', user);
    navigate(`/user/${user.id}`)
  }


  return ( 
    <div>
      <h1>Your Reservations.</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.rooms[0].address}</h1>
          <h1>Starting at: {user.reservations[0].start_date}</h1>
          <h1>Ending at: {user.reservations[0].end_date}</h1>
          <h1>{user.price}</h1>
          <h1>{user.total}</h1>
          <button onClick={() => handleShow(user)}>More Information on your Booking</button>
        </div>
      ))}
    </div>
  )
}