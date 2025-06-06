import React from 'react'
import About from './About'
import Experience from './Experience'
import Education from './Education'
import Skills from './Skills'
import './Curriculum.css'

const Curriculum = () => {
  return (
    <section className='curriculum'>
        <About />
        <Experience />
        <Education />
        <Skills />
    </section>
  )
}

export default Curriculum