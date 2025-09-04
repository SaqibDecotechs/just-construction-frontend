import React from 'react'
import NavBar from '../../component/navbar/NavBar'
import Footer from '../../component/footer/Footer'
import './CaseStudies.css'
import { MdKeyboardArrowDown } from 'react-icons/md'
import CaseCardsSection from '../../component/CaseStudiesCards/CaseStudiesCards'
import IndustryNewsSection from '../../component/Contact/IndustryNews'

const CaseStudies = () => {
    return (
        <div>
            <NavBar />

            <div className="ourservices-case">
                <div className="case-overlay case-overlay-content">
                    <h1 className="case-title">Case Studies</h1>
                    <div className="hero-arrow">
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </div>

            <div className="case-main">
                <p>
                    Partnering with diverse clients across the construction sector, we focus on adapting to evolving industry needs while delivering exceptional recruitment solutions through research, innovation, and top-tier talent sourcing.
                </p>
            </div>

            <CaseCardsSection />

            <IndustryNewsSection />

            <Footer />
        </div>
    )
}

export default CaseStudies