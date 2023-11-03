import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "./index.css";
import Home from './components/Home/Home.jsx';
import Main from './Layout/Main.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import {

  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/review",
        element: <OrderReview></OrderReview>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);