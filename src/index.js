import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'; 
import Index from './App';
import reportWebVitals from './reportWebVitals';
// componants
import Product from './Componant/Products/product';
import Order from './Componant/Orders/Order';
import User from './Componant/Users/User';
const routes = createBrowserRouter(
  [
    {
      path:"/",
      element:<Index/>,
      children:[
        {
          index:true ,
          element:""
        },
        {
          path:"Products",
          element: <Product/>
        },
        {
          path:"Orders",
          element: <Order/>
        },
        {
          path:"User",
          element: <User/>
        }
      ]
    }  
  ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={routes} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
