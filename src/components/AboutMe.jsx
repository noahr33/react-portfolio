import portrait from '../assets/portrait.jpeg'

const AboutMe = () => {
  return (
    <div className="mt-5 text-center">
      <h2>About Me</h2>
      <img src={portrait} alt="" className="rounded-circle" width={175} />
      <p>This is where the about me section would go</p>
    </div>
  )
}

export default AboutMe
