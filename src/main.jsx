import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop';
import Home from './component/Layout/Home';
import Orders from './component/Orders/Orders';
import Inventory from './component/Inventory/Inventory';
import Login from './component/Login/Login';
import cartProductsLoader from './Loaders/cartProductsLoader';
import Checkout from './component/Checkout/Checkout';
import SignUp from './component/Register/SignUp';
import AuthProvider from './component/providers/AuthProvider';
import PrivateRoute from './route/PrivateRoute';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element: <Shop></Shop>
      },
      {
        path: '/order',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path:'/checkout',
        element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
      },
      {
        path:'/inventory',
        element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: '/login',
        element:<Login></Login>

      } ,
      {
        path:'/register',
        element:<SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider><RouterProvider router ={router}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
