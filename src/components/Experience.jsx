import React from 'react'

const Experience = () => {
    return (
        <section className='experience'>
            <h3>✦ EXPERIENCE</h3>

            <h4><strong>Data Analyst</strong> <span class="bullet">•</span> Datawheel</h4>
            <h5>Feb 2023 - Present | Concepción, Chile</h5>
            <ul>
                <li>Created content and visualizations for our automated reporting sites, mainly <a
                    href="https://datausa.io/" target="_blank">DataUSA</a> and <a href="https://datasaudi.sa/en"
                        target="_blank">DataSaudi</a>.</li>
                <li>Developed an MVP AI chatbot that translates a user’s question into an API endpoint to retrieve data from a relational database,
                    using LangChain to analyze it and give an answer back.</li>
                <li>Developed a RAG-based AI chatbot using FastAPI, PostgreSQL to store content and vLLM to serve the LLM.
                    Currently available in <a href="https://oec.world/en" target="_blank">OEC</a>.</li>
            </ul>

            <h4><strong>Human Pharma Operations Intern</strong> <span class="bullet">•</span> Boehringer Ingelheim</h4>
            <h5>Jun - Oct 2022 | Milan, Italy</h5>
            <ul>
                <li>Analysed and validated multichannel communication plans of the company’s field force.</li>
                <li>Developed long term and short term sales and market share forecasts for the Chronic Care line.</li>
                <li>Built Tableau dashboards to visualize sales monitoring and corresponding KPIs.</li>
            </ul>
        </section>
    )
}

export default Experience