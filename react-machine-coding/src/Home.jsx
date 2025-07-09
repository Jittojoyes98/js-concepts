import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Hii</h1>
      <Link to="/challenge1">Challenge1</Link>
      <Link to="/challenge2">Challenge2</Link>
      <Link to="/challenge3">Challenge3</Link>
      <Link to="/challenge4">Challenge4</Link>
      <Link to="/challenge5">Challenge5</Link>
      <Link to="/challenge6">Challenge6</Link>
      <Link to="/challenge7">Challenge7</Link>
      <Link to="/challenge8">Challenge8</Link>
      <Link to="/challenge9">Challenge9</Link>

      <h1>Machine coding round</h1>
      <Link to="/machine1">Machine1</Link>
    </>
  )
}

export default Home
