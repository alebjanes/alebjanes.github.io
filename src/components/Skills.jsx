import React from 'react'
import './Skills.css'

const Skills = () => {
    return (
        <section className='skills'>
            <h3>✦ SKILLS</h3>

            <div className='skills-columns'>
                <div class='column'>
                    <h5>Software</h5>
                    <ul>
                        <li>Office Suite</li>
                        <li>Tableau</li>
                        <li>Dbeaver</li>
                        <li>Postman</li>
                    </ul>
                </div>
                <div class='column'>
                    <h5>Python Libraries</h5>
                    <ul>
                        <li>Matplotlib</li>
                        <li>Pandas</li>
                        <li>Tensorflow</li>
                        <li>SQLAlchemy</li>
                        <li>FastAPI</li>
                        <li>OpenAI</li>
                    </ul>
                </div>
                <div class='column'>
                    <h5>Programming Languages</h5>
                    <ul>
                        <li>Python</li>
                        <li>SQL</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div class='column'>
                    <h5>Languages</h5>
                    <ul>
                        <li>Spanish: Native</li>
                        <li>English: Fluent (TOEFL 114/120)</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills