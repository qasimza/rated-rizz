import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import { Stack } from '@mui/material';
import BaseTemplate from '../../shared/components/BaseTemplate';

const HomeComponent = () => {
  return (
  <>
    <Hero/>
    <About/>
  </>
  )
}

export default function Home(){
    return (
      <BaseTemplate navbarComponent={<Navbar/>} pageComponent={<HomeComponent />}/>
    )
}