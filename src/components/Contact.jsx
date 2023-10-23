const Contact = () => {
  return (
    <div className="container m-5 col-6">
      <h2>Contact</h2>
      <form>
        <div className="mb-3">
          <label className="form-label" htmlFor="nameInput">
            Name
          </label>
          <input type="text" className="form-control" id="nameInput" />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="emailInput">
            Email
          </label>
          <input type="email" className="form-control" id="emailInput" />
        </div>
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            id="textArea"
            style={{ height: 100 }}
          ></textarea>
          <label className="form-label" htmlFor="textArea">
            Leave a message
          </label>
        </div>
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
