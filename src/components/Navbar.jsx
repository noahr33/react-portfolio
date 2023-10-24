import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="text-center align-items-center bg-dark p-2 bg-gradient">
      <div className="text-light">
        <h1 className="fs-2">Noah Koleske</h1>
      </div>
      <div className="d-flex justify-content-center gap-4 fs-6">
        <Link to="/" className="text-light text-decoration-none">
          About Me
        </Link>
        <Link to="/portfolio" className="text-light text-decoration-none">
          Portfolio
        </Link>
        <Link to="/contact" className="text-light text-decoration-none">
          Contact Me
        </Link>
        <Link to="/resume" className="text-light text-decoration-none">
          Resume
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
