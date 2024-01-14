import { useState } from 'react'
import ReactPlayer from 'react-player'
import Animation from './assets/images/brewition-logo.mp4'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ReactPlayer 
      url={Animation}
      muted={true}
      playing={true}
      className="logo"
      />
      <br />
      <a className='contact-button' href="https://www.know.ee/9a6QszaT5CS">Get in Touch</a>
    </>
  )
}

export default App
