import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const About = () => {
  return (
    <section>
        <p>Hi! I'm Ale 👋 I'm an Industrial Engineer from Universidad de Concepción with a Master's in Business Analytics and Big Data from Politecnico di Milano. Currently, I work as a Data Analyst at Datawheel, where I focus on data processing, visualization, and making complex information more accessible. I have a background in machine learning and work with tools like Python, SQL, and D3plus to build data-driven solutions.</p>
        <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="https://www.linkedin.com/in/alexandrabjanes" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={26} />
            </a>
            <a href="https://github.com/alebjanes" target="_blank" rel="noopener noreferrer">
            <FaGithub size={26} />
            </a>
        </div>
    </section>
  )
}

export default About