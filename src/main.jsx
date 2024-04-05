import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'atropos/css'
import 'boxicons'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ContactPage from './Route/ContactPage.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/:number",
    element: <ContactPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
