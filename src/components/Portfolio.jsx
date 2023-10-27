import { useState } from 'react'
import './portfolio.scss'
import Project from './Project.jsx'
import { gourmet, encyclopet } from '../assets/index'

const projects = [
  {
    title: 'Gourmet Guide',
    deployed: 'https://gourmet-guide11-85962ead4ef2.herokuapp.com/',
    githubLink: 'https://github.com/adamolson11/Gourmet-Guide',
    img: gourmet,
  },
  {
    title: 'EncycloPet',
    deployed: 'https://nstark12.github.io/encyclopet/',
    githubLink: 'https://github.com/nstark12/encyclopet#encyclopet',
    img: encyclopet,
  },
  {
    title: 'New Project',
    deployed: '#',
    githubLink: '#',
    img: 'https://placehold.co/400',
  },
  {
    title: 'New Project',
    deployed: '#',
    githubLink: '#',
    img: 'https://placehold.co/400',
  },
  {
    title: 'New Project',
    deployed: '#',
    githubLink: '#',
    img: 'https://placehold.co/400',
  },
  {
    title: 'New Project',
    deployed: '#',
    githubLink: '#',
    img: 'https://placehold.co/400',
  },
]

const imageStyle = {
  width: 50,
  backgroundImage: 'url(' + projects.img + ')',
}

const Portfolio = () => {
  return (
    <div className="contain">
      <h2 className="text-center mb-5 text-light">My Projects</h2>
      <div className="container d-flex justify-content-evenly gap-5 flex-wrap m-3">
        {projects.map((project) => {
          return (
            <div
              className="project-card rounded border"
              style={{ backgroundImage: `url(${project.img})` }}
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
