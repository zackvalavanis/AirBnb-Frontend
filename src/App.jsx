import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import { Header } from './Header';
import { Footer } from './Footer';
import { SignupPage } from './SignupPage';
import { RoomsIndexPage } from './RoomsIndexPage';
import { LoginPage } from './LoginPage';
import { LogoutPage } from './LogoutPage'

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
        element: <RoomsIndexPage />
      },
      { 
        path: '/signup',
        element: <SignupPage />
      }, 
      { 
        path: '/login',
        element: <LoginPage />
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