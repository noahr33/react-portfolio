import portrait from '../assets/portrait.jpeg'

const AboutMe = () => {
  return (
    <div className="mt-5 text-center text-light">
      <h2>About Me</h2>
      <img src={portrait} alt="" className="rounded-circle m-5" width={175} />
      <p>
        This is where the about me section would go. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Eligendi, dicta earum reprehenderit iure,
        nobis deleniti vel dolorum nostrum, autem sed dignissimos? Provident
        distinctio officiis illo et, sequi corporis unde id, corrupti ex dolorem
        fugiat, in libero. Commodi pariatur nihil fu
      </p>
    </div>
  )
}

export default AboutMe
