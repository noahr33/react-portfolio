import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const active = {
  color: 'red',
}

const Navbar = () => {
  return (
    <nav className="text-center align-items-center bg-dark p-2 bg-gradient">
      <div className="text-light">
        <h1 className="fs-2">Noah Koleske</h1>
      </div>
      <div className="d-flex justify-content-center gap-4 fs-6">
        <NavLink
          to="/"
          className=" text-decoration-none"
          style={({ isActive }) => {
            return {
              color: isActive ? '#f05252' : 'white',
            }
          }}
        >
          About Me
        </NavLink>
        <NavLink
          to="/portfolio"
          className="text-decoration-none"
          style={({ isActive }) => {
            return {
              color: isActive ? '#f05252' : 'white',
            }
          }}
        >
          Portfolio
        </NavLink>
        <NavLink
          to="/contact"
          className="text-decoration-none"
          style={({ isActive }) => {
            return {
              color: isActive ? '#f05252' : 'white',
            }
          }}
        >
          Contact Me
        </NavLink>
        <NavLink
          to="/resume"
          className="text-decoration-none"
          style={({ isActive }) => {
            return {
              color: isActive ? '#f05252' : 'white',
            }
          }}
        >
          Resume
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
