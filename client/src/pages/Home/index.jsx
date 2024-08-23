import React from 'react';
import NavbarPage from '../../components/LandingPage/NavbarPage';
import Footer from '../../components/LandingPage/Footer';
import Carousel from '../../components/LandingPage/Carousel';

const Home = () => {
    return (
        <div>
            <NavbarPage />
            <div className=''>
                <Carousel />
            </div>
            <div className=''>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
