import { useForm } from 'react-hook-form'
import { useState } from 'react'

const Contact = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = null

  return (
    <div className="container m-auto mt-5 col-6 bg-light p-4 rounded-3">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label className="form-label" htmlFor="nameInput">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            {...register('name', { required: true })}
            onMouseLeave={(e) => (e.target.placeholder = 'Required')}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="emailInput">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            })}
            onMouseLeave={(e) => (e.target.placeholder = 'Required')}
          />
        </div>
        <div className="mb-3 form-floating">
          <textarea
            className="form-control"
            id="textArea"
            style={{ height: 100 }}
            {...register('message', {
              required: true,
            })}
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
