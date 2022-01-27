import { useState } from 'react'
import landscape from './image.svg'
import './styles/main.css'

function App() {
  return (
      <>
        <section className="container shadow">
            <p>Upload your image</p>
            <p>File should be image (jpeg, png)..</p>
            <div className="box">
                <img src={landscape} />
                <p>Drag &amp; Drop your image here</p>
            </div>
            <p>Or</p>
            <button>Choose a File</button>
        </section>
      </>

  )
}

export default App
