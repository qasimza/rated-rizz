import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import BaseTemplate from '../../shared/components/BaseTemplate';
import ContactUs from './ContactUs';
import Pricing from './Pricing';

const HomeComponent = () => {
  return (
  <>
    <Hero/>
    <About/>
    <Pricing />
    <ContactUs />
  </>
  )
}

export default function Home(){
    return (
      <BaseTemplate navbarComponent={<Navbar/>} pageComponent={<HomeComponent />}/>
    )
}