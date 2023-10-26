import 'bootstrap-icons/font/bootstrap-icons.css'
import './footer.css'

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark d-flex justify-content-center align-items-center p-2 bg-gradient gap-3">
      <a
        href="https://github.com/noahr33"
        className="icon-link icon-link-hover text-decoration-none"
      >
        <i className="bi bi-github" style={{ fontSize: 30 }} />
      </a>
      <a href="#" className="icon-link icon-link-hover text-decoration-none">
        <i className="bi bi-linkedin" style={{ fontSize: 30 }} />
      </a>
      <a href="#" className="icon-link icon-link-hover text-decoration-none">
        <i className="bi bi-stack-overflow" style={{ fontSize: 30 }} />
      </a>
    </footer>
  )
}

export default Footer
