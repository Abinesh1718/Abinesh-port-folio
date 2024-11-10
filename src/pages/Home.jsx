import React from 'react'
import './style.css'
import profileStanding from '../assets/profile.jpeg'
import { MapPin } from 'lucide-react'
function Home() {

    const handleGetData=async()=>{


        try {
          const response = await fetch("https://rbs-transport-backend.onrender.com/api/companies/list");
          const data = await response.json();
          console.log(data); // Use the data as needed
        } catch (error) {
          console.log("ERROR:", error.message); // Logs a more detailed error message
        }
    
    }
    return (
        <div className="container">
            <div className="container-section">
                <div className="title">
                    Hi, I&apos;m Abinesh{' '}
                    <span className="inline-block animate-waving-hand">👋</span>

                    <button onClick={handleGetData}>Submit Call here </button>
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