import React from 'react'
import { useState } from 'react'

const data = [
  { name: 'India', value: 'IN', cities: ['Mumbai', 'New Delhi'] },
  { name: 'Pakistan', value: 'PAK', cities: ['Karachi', 'Lahore'] },
  { name: 'England', value: 'ENG', cities: ['London', 'Newcastle'] },
]
const Challenge7 = () => {
  const [country, setCountry] = useState()
  const [city, setCity] = useState(['Mumbai', 'New Delhi'])
  const [currentCity, setCurrentCity] = useState('Mumbai')
  const handleSelectCountry = (e) => {
    let countryIndex = data.filter((con) => con.value == e.target.value)
    setCountry(e.target.value)
    setCity(countryIndex[0].cities)
  }
  const handleSelectState = (e) => {
    setCurrentCity(e.target.value)
  }
  
  return (
    <>
      <h1>Challenge7</h1>
      <select onChange={handleSelectCountry} >
        {data.map((con) => {
          return <option value={con.value}>{con.name}</option>
        })}
      </select>
      <select onChange={handleSelectState} >
        {city.length > 0 &&
          city.map((cit) => {
            return <option value={cit}>{cit}</option>
          })}
      </select>
    </>
  )
}

export default Challenge7
