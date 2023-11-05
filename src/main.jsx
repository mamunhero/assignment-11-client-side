import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-full max-w-6xl mx-auto px-[25px]'>
    <React.StrictMode>
      <RouterProvider router={Route}></RouterProvider>
    </React.StrictMode>,
  </div>
)
