import React from 'react';
import NavbarHero from '../../component/navbar/NavBar';
import Footer from '../../component/footer/Footer';
import CSRHeroSection from '../../component/csrHero/CSRHeroSection';
import './csr.css';

const CSR = () => {
  return (
    <>
      <NavbarHero />
      <CSRHeroSection />
      <Footer />
    </>
  );
};

export default CSR;