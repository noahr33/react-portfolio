import { useState } from 'react'
import './portfolio.scss'

const projects = [
  {
    title: 'test 1',
    deployed: '#',
    github: 'test github',
    img: 'src/assets/sign-right-icon.png',
  },
  {
    title: 'test 2',
    deployed: '#',
    github: 'test github 2',
    img: 'src/assets/sign-right-icon.png',
  },
]

const Portfolio = () => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div className="contain">
      <h2>My Projects</h2>
      <div className="container row m-3">
        {projects.map((project) => {
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
                    <i
                      className="links bi bi-github"
                      style={{ fontSize: 40 }}
                    ></i>
                  </a>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
