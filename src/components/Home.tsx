import { Container, Typography } from '@mui/material';
import Navbar from './Navbar';

export default function Home(){
    return (
      <>
        <Navbar/>
        <div className='flex w-full h-96 items-end justify-center'>
          <Typography variant="h1" className="text-primary-700 font-bold text-6xl">
              Rated Rizz!
          </Typography>
        </div>
        <div className='flex w-full items-end justify-center'>
          <Typography variant="h2" className="text-indigo-500 font-bold text-3xl">
            Student success made easy! 
          </Typography>
        </div>
      </>
    )
}