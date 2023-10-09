import { useEffect } from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import Services from './Services'
import { Footer } from './Footer'
import Sponsor from './Sponsor'

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <div>
        <Banner></Banner>
        <AboutUs></AboutUs>
        <Services></Services>
        <Sponsor></Sponsor>
        <Footer></Footer>
    </div>
  )
}

export default Home