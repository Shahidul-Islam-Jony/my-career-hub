import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Root/Root';
import Statistics from './Pages/Statistics/Statistics';
import AppliedJobs from './Pages/AppliedJobs/AppliedJobs';
import Blog from './Pages/Blog/Blog';

const router = createBrowserRouter([{
  path: '/',
  element: <Root></Root>,
  children: [
    {
      path: '/',
      element: <Statistics></Statistics>
    },
    {
      path:'/appliedjobs',
      element:<AppliedJobs></AppliedJobs>
    },
    {
      path:'/blog',
      element:<Blog></Blog>
    }
  ]
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
