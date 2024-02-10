import { useState } from 'react'
import ReactPlayer from 'react-player'
import Animation from './assets/images/brewition-logo.mp4'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

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

<video src="https://drive.google.com/file/d/1D-PPXKbm6PkdeUKqNxWTvNjh4CnehyhE/view?usp=sharing"></video>

export default App
