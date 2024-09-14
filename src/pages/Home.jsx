import React from 'react'
import './style.css'
import profileStanding from '../assets/profile.jpeg'
import { MapPin } from 'lucide-react'
function Home() {
    return (
        <div className="container">
            <div className="container-section">
                <div className="title">
                    Hi, I&apos;m Abinesh{' '}
                    <span className="inline-block animate-waving-hand">👋</span>
                </div>
                <div className="about">
                    A passionate full stack developer specializing in React.js and Node.js, I create and design exceptional
                    digital experiences that are fast, accessible, visually appealing, and responsive. With over 2 years of
                    experience in web and mobile application development, my enthusiasm for crafting innovative solutions remains as strong as ever.
                </div>
                <div>
                    <div className="location">

                        <span className="ping-circle"></span>
                        <span className="ping-animation"></span>
                        <span>Available for new projects</span>

                    </div>
                    <div className='current-locations'>

                        <MapPin className="stroke-gray-600" />
                        <span>  Tamilnadu, India</span>
                    </div>


                </div>

                <div className="profile-container">
                    <img src={profileStanding} className='profile' alt=""
                    />
                    <div className="background">
                    </div>
                </div>

            </div>


        </div>

    )
}

export default Home