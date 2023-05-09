import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import Error from './routes/Error.tsx'
import Comeco from './routes/Comeco.tsx'
import Regioes from './routes/Regioes.tsx'
import Pokedex from './routes/Pokedex.tsx'


const route = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Comeco />
      },
      {
        path: 'regioes',
        element: <Regioes />,
      },
      {
        path: 'regioes/pokedex',
        element: <Pokedex />,
      },
    ],
  }
])




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
