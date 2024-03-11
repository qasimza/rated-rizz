import { Stack, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import logo from '../../shared/images/logo.png'

const Navbar = () => {
    return (
        <Stack
        direction="row"
        rowGap={4}
        useFlexGap
        flexWrap="wrap"
        className="w-[80%] items-center justify-between"
        >
        <div className='flex flex-row items-center'>
            <img src={logo} alt="Rated Rizz Logo" className='w-16 h-16'/>
            <Typography className="text-primary-600 font-bold text-4xl ml-2">RatedRizz</Typography>
        </div>
        <div>
            <Button size='large' className='text-secondary-800 w-32 h-12'>About</Button>
            <Button size='large' className='text-secondary-800 w-32 h-12'>Support</Button>
            <Button size='large' className='text-secondary-800 w-32 h-12'>Pricing</Button>
            <Button size='large' className='text-secondary-800 w-32 h-12'>Login</Button>
            <Button variant='contained' size='large' className='bg-primary-600 w-48 h-12'>Signup for free!</Button>
        </div>
        </Stack>
    )
}

export default Navbar