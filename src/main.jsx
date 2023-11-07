import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Route/Route'
import AuthProvider from './Provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='w-full max-w-6xl mx-auto px-[25px]'>
    <React.StrictMode>
     <AuthProvider>
      <RouterProvider router={Route}></RouterProvider>
     </AuthProvider>
    </React.StrictMode>,
  </div>
)
