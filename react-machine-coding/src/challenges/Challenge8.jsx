import React from 'react'
import { useState } from 'react'

const Challenge8 = () => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputs);
  }
  const handleInput = (e) => {
    const name = e.target.name
    const value = e.target.value
    setInputs((input) => ({ ...input, [name]: value }))
  }
  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleInput}
          value={inputs.email || ''}
        />
        <label htmlFor="password">Password</label>

        <input
          type="password"
          name="password"
          onChange={handleInput}
          value={inputs.password || ''}
        />
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  )
}

export default Challenge8
