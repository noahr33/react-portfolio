import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
