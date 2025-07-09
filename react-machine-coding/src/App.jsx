import { Suspense, useCallback, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Challenge2 from './challenges/Challenge2'
import Challenge1 from './challenges/Challenge1'
import Challenge3 from './challenges/Challenge3/index'
import Challenge4 from './challenges/Challenge4'
import Challenge5 from './challenges/Challenge5'
import Challenge6 from './challenges/Challenge6/Challenge6'
import Challenge7 from './challenges/Challenge7/Challenge7'
import Challenge8 from './challenges/Challenge8'
import Challenge9 from './challenges/Challenge9/Challenge9'
import Machine1 from "./machine-coding/Machine1/Machine1";


function App() {
  let github = 'https://github.com/sadanandpai/frontend-mini-challenges/'
  return (
    <BrowserRouter basename="/">
      <Suspense>
        <Routes>
          {/* add routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/challenge1" element={<Challenge1 link={github} />} />
          <Route path="/challenge2" element={<Challenge2 link={github} />} />
          <Route path="/challenge3" element={<Challenge3 link="abcg" />} />
          <Route
            path="/challenge4"
            element={<Challenge4 link="abcg" />}
          />
          <Route path="/challenge5" element={<Challenge5 link="abcg" />} />
          <Route path="/challenge6" element={<Challenge6 link="abcg" />} />
          <Route path="/challenge7" element={<Challenge7 link="abcg" />} />
          <Route path="/challenge8" element={<Challenge8 link="abcg" />} />
          <Route path="/challenge9" element={<Challenge9 link="abcg" heading="OTP" />} />

          <Route path="/machine1" element={<Machine1 link="abcg" />} />

          <Route path="/*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
