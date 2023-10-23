import 'bootstrap-icons/font/bootstrap-icons.css'
import './footer.css'

const Footer = () => {
  return (
    <footer className="fixed-bottom bg-dark d-flex justify-content-center align-items-center p-3">
      <a
        href="https://github.com/noahr33"
        className="icon-link icon-link-hover text-decoration-none"
      >
        <i className="bi bi-github" style={{ fontSize: 40 }} />
      </a>
    </footer>
  )
}

export default Footer
