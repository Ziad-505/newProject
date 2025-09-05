import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import NotFound from './NotFound/NotFound';


function App() {
  const router = createBrowserRouter([
    {path:'', 
    element: <Layout />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />},
      {path: 'portfolio', element: <Portfolio />},
      {path: 'contact', element: <Contact />},
      {path: '*', element: <NotFound />},

    ]},
  ])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
      
  )
}

export default App
