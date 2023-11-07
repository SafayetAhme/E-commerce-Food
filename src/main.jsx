import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rout from './Components/Router/Rout.jsx';
import Home from './Components/Pages/Home/Home.jsx';
import AvailableFoods from './Components/Pages/AvailableFoods/AvailableFoods.jsx';
import AddFood from './Components/Pages/AddFood/AddFood.jsx';
import ManageFood from './Components/Pages/ManageFood/ManageFood.jsx';
import RequestFood from './Components/Pages/RequestFood/RequestFood.jsx';
import SignIn from './Components/Pages/SignIn/SignIn.jsx';
import SignUp from './Components/Pages/SignUp/SignUp.jsx';
import AuthProvider from './Components/Pages/Auth/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout></Rout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/availablefood",
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>
      },
      {
        path: "/managefood",
        element: <ManageFood></ManageFood>
      },
      {
        path: "/requestfood",
        element: <RequestFood></RequestFood>
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
