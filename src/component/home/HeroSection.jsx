import React from 'react'
import "../../style/components/heroSection.css"
import SocialIcon from '../socialIcon'
import Button from '../button'

const HeroSection = () => {
    return (<>
        <section className="hero">
            <video
                className="hero-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="https://vid.cdn-website.com/2cce4485/videos/mgFkzVx4RAOWqnkO9PKb_EIdIjUS3S7KfyVokn7Vc_shutterstock_1014163070%2B%281%29-v-v.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-overlay"></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Supplying Leading Talent
                </h1>
                <h2 className="hero-subtitle">
                    to the Construction Sector
                </h2>
                <p className="hero-description">
                    Specialist recruitment to the Construction Industry across the UK.
                    Connect with top professionals and build your future in construction.
                </p>
                <div className="hero-actions">

                    <Button text={"Our Services"} />
                    <Button text={"Search Job"} />

                </div>
            </div>
            <SocialIcon />
        </section>
    </>
    )
}

export default HeroSection
