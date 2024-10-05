import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import axios from 'axios'
import { Header } from './Header';
import { Footer } from './Footer';
import { SignupPage } from './SignupPage';
import { RoomsIndexPage } from './RoomsIndexPage';
import { LoginPage } from './LoginPage';
import { RoomsShowPage } from './RoomsShowPage';
import { HomePage } from './HomePage';
import { ReservationsPage } from './ReservationsPage';



const router = createBrowserRouter([
  { 
    element: ( 
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ), 
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      { 
        path: '/Rooms', 
        element: <RoomsIndexPage />,
        loader: () => axios.get("http://localhost:3000/rooms.json").then((response) => response.data)
      },
      {
        path: '/rooms/:id', 
        element: <RoomsShowPage />, 
        loader: ({ params }) => axios.get(`http://localhost:3000/rooms/${params.id}.json`).then((response) => 
          response.data),
      },
      { 
        path: '/signup',
        element: <SignupPage />
      }, 
      { 
        path: '/login',
        element: <LoginPage />
      }, 
      { 
        path: '/reservations', 
        element: <ReservationsPage />, 
        loader: () => axios.get('http://localhost:3000/users.json').then((response) => {
          console.log(response.data)
        return response.data })
      }
    ]
  }
])

function App() { 
  return ( 
    <RouterProvider router={router} />
  )
}

export default App