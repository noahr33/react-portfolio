import resume from '../assets/resume-test.pdf'

const Resume = () => {
  return (
    <div className="container m-5 text-light">
      <h2>Resume</h2>
      <p>This is where the Resume section would go</p>
      <a href={resume} download="myResumeFile" target="_blank">
        <button href={resume} className="btn btn-dark">
          Download Resume
        </button>
      </a>
    </div>
  )
}

export default Resume
