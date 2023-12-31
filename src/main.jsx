import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Root from './components/Root';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import EventDetails from './components/EventDetails';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import PrivateRoute from './Routes/PrivateRoutes';
import AuthProvider from './Providers/AuthProvider';
import Gallery from './components/Gallery';
import TeamSection from './components/TeamSection';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/event/:id",
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: () => fetch('../event.json')
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: "/gallery",
        element: <PrivateRoute><Gallery></Gallery></PrivateRoute>
      },
      {
        path: "/team",
        element: <PrivateRoute><TeamSection></TeamSection></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
