import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="d-flex justify-content-evenly align-items-center bg-dark p-3 gradient">
      <div className="text-light">
        <h1>Noah Koleske</h1>
      </div>
      <div className="d-flex gap-5 fs-4">
        <Link to="/" className="text-light">
          About Me
        </Link>
        <Link to="/portfolio" className="text-light">
          Portfolio
        </Link>
        <Link to="/contact" className="text-light">
          Contact Me
        </Link>
        <Link to="/resume" className="text-light">
          Resume
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
