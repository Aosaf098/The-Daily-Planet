import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import HomeLayout from '../layouts/HomeLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  }
])

export default router