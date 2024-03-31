import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Users from './components/Users.jsx';
import Update from './components/Update.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
   
    children: [
       { loader:() =>fetch('https://simple-crud-server-virid.vercel.app/users'),
        path: "/users",
        element: <Users></Users>,
      },
      {
        path:'/update/:id',
        element:<Update></Update>,
        loader:({params}) =>fetch(`https://simple-crud-server-virid.vercel.app/update/${params.id}`)
      }
  
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
