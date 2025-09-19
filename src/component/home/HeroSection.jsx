import React from 'react'
import { useSelector } from 'react-redux'
import { selectSelectedCountry } from '../../store/slices/countrySlice'
import "../../style/components/heroSection.css"
import SocialIcon from '../socialIcon'
import Button from '../button'
import { useNavigate } from 'react-router-dom'


const HeroSection = () => {
    const navigate = useNavigate();
    const selectedCountry = useSelector(selectSelectedCountry);

    const getBackgroundImage = () => {
        if (selectedCountry === 'UK') {
            return require('../../assest/uk.jpg');
        } else if (selectedCountry === 'US') {
            return require('../../assest/usa.jpg');
        }
        return require('../../assest/uk.jpg'); // Default to UK
    };

    return (<>
        <section className={`hero ${selectedCountry === 'UK' ? 'uk-background' : 'usa-background'}`} style={{ backgroundImage: `url(${getBackgroundImage()})` }}>
            <div className={`hero-overlay ${selectedCountry === 'UK' ? 'hero-overlay-dark' : ''}`}></div>

            <div className="hero-content">
                <h1 className="hero-title">
                    Providing Top Talent
                </h1>
                <h2 className="hero-subtitle">
                    for the Construction Industry
                </h2>
                <p className="hero-description">
                    {selectedCountry === "UK"
                        ? "Specialised hiring solutions for the UK construction sector. Partner with skilled professionals to build your success."
                        : "Specialized hiring solutions for the US construction sector. Partner with skilled professionals to build your success."}
                </p>

                <div className="hero-actions">

                    <Button text="Our Services" onClick={() => navigate("/our-services")} />
                    <Button text="Search Job" onClick={() => navigate("/all-jobs")} />

                </div>
            </div>
            <SocialIcon />
        </section>
    </>
    )
}

export default HeroSection
