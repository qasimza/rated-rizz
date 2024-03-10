import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import { Stack } from '@mui/material';

export default function Home(){
    return (
      <Stack
        justifyContent="center"
        alignItems="center"
        rowGap={4}
        >
        <Navbar/>
        <Hero/>
        <About/>
      </Stack>
    )
}