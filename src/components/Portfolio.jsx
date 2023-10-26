import { useState } from 'react'
import './portfolio.scss'
import Project from './Project.jsx'
import TEST from '../assets/Gourmet.jpg'

const projects = [
  {
    title: 'Gourmet Guide',
    deployed: 'https://gourmet-guide11-85962ead4ef2.herokuapp.com/',
    githubLink: 'https://github.com/adamolson11/Gourmet-Guide',
    img: 'src/assets/sign-right-icon.png',
  },
  {
    title: 'test 2',
    deployed: '#',
    github: 'test github 2',
    img: 'src/assets/sign-right-icon.png',
  },
]

const imageStyle = {
  width: 50,
  backgroundImage: 'url(' + projects.img + ')',
}

const Portfolio = () => {
  return (
    <div className="contain">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="container d-flex justify-content-evenly  m-3">
        {projects.map((project) => {
          return (
            <div
              className="project-card rounded border"
              style={{ backgroundImage: `url(${TEST})` }}
            >
              <a href={project.deployed} className="text-decoration-none links">
                <div className="link-box title rounded-top">
                  <div className="title-box rounded-top">
                    <p className="fs-4">{project.title}</p>
                  </div>
                </div>
              </a>
              <a
                href={project.githubLink}
                className="text-decoration-none links d-flex align-items-center"
              >
                <div className="link-box git-link rounded-bottom">
                  <i className="bi bi-github" style={{ fontSize: 20 }}></i>
                </div>
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Portfolio
