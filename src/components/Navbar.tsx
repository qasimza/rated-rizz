import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <div className='flex w-full h-24 items-center justify-center'>
            <div className='flex w-[80%] h-full items-center justify-between'>
                    <Box className="bg-primary-600 h-16 w-20 flex items-center justify-center">
                        <Typography className="text-indigo-100 font-bold text-5xl">R</Typography>
                    </Box>
                    <Typography className="text-primary-600 font-bold text-4xl ml-2">RatedRizz</Typography>
                <div className='flex w-full justify-end space-x-5'>
                    <Button size='large' className='text-secondary-800 w-32 h-12'>About</Button>
                    <Button size='large' className='text-secondary-800 w-32 h-12'>Support</Button>
                    <Button size='large' className='text-secondary-800 w-32 h-12'>Pricing</Button>
                    <Button size='large' className='text-secondary-800 w-32 h-12'>Login</Button>
                    <Button variant='contained' size='large' className='bg-primary-600 w-48 h-12'>Signup for free!</Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar