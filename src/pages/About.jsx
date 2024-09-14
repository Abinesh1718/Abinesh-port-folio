import React from 'react'
import './style.css'
import profileStanding from '../assets/profile-standing.jpeg'

function About() {
    return (

        <div className="about-container">
            <div className="about-title">
                <button>About me</button>
            </div>
            <div className="about-box-container">

                <div className="left-side-container">

                    <div className="standing-profile-bg">

                        <span>
                            <div className="about-content">

                                <h2>Curious about me? Here you have it:</h2>


                                <p> who specializes in full stack development (React.js & Node.js). I am
                                    enthusiastic about bringing the technical and visual aspects of
                                    digital products to life.</p>
                                {/* {' '} */}

                                <p> I began my journey as a Full Stack developer in 2022, and since then,
                                    I&apos;ve continued to grow and evolve as a developer, taking on new
                                    challenges and learning the latest technologies along the way.</p>

                                <p>
                                    I graduated with a BE in Mechanical Engineering
                                    from VRS College of Engineering and Technology in Arasur, Villupuram, securing 63%. I began my career as an Administration Executive
                                    at Ameya Foods Industry in Coimbatore, where
                                    I worked for 2 years. My interest in the IT sector led me to study Full Stack Development, after which I transitioned
                                    to a Full Stack Developer role at Studioq Web Solutions in Puducherry. With 2.5 years of experience,
                                    I specialize in building cutting-edge web and mobile applications using modern technologies like React, React Native, Node.js, Next.js, and TypeScript
                                </p>
                                <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>


                                <p>Finally, some quick bits about me..</p>

                                <li>B.E in Mechanical ENgineer</li>
                                <li>Part-time Freelancer</li>


                                <p>
                                    One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉

                                </p>




                            </div>
                        </span>
                    </div>
                </div>

                <div className="right-side-container">
                    <img src={profileStanding} className='full-profile' alt="" />
                </div>
            </div>


        </div>

    )
}

export default About







