import React from 'react'
import videoHomePage from '../../assets/video-homepage.mp4';

const HomePage = () => {
  return (
    <div className='homepage-container'>
      <video
        autoPlay
        muted
        loop
      >
        <source
          src={videoHomePage}
          type='video/mp4'
        />
      </video>
      <div className='homepage-content'>
        <h1 className='homepage-heading'>There's a better way to ask</h1>
        <p className='homepage-subHeading'>You don't want to make a boring form. And your audience won't answer one. Create a typeform instead—and make everyone happy.</p>
        <div className='homepage-button'>
          <button>Get started - it's free</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
