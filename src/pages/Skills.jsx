import React from 'react';
import './style.css';
import { TECHNOLOGIES } from '../lib/data';

const SkillsContainer = () => {
    return (
        <div className="skills-container">
            <div className="about-title">
                <button>Skills</button>

            </div>
            <span> The skills, tools and technologies I am really good at:</span>

            <div className="skils-list">

                {TECHNOLOGIES.map((data, i) => (
                    <div key={i} className="skill-item">
                        <a href={data.url} target="_blank" rel="noopener noreferrer">
                            <div className="skill-logo">
                                <img src={data.logo} alt={`${data.label} logo`} />
                            </div>
                            <h1>{data.label}</h1>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkillsContainer;
