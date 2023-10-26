import { useState } from 'react'

const Project = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="cards col-3 position-relative p-0"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <img src={project.img} alt="" />
      {isShown && (
        <div className="position-absolute bottom-0 start-0 col-12 d-flex align-items-center justify-content-center ms-2">
          <a href={project.deployed} className="text-decoration-none">
            <p className="links mt-2">{project.title}</p>
          </a>
          <a href={project.github} className="text-decoration-none">
            <i className="links bi bi-github" style={{ fontSize: 40 }}></i>
          </a>
        </div>
      )}
    </div>
  )
}

export default Project
