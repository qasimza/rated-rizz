import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <div className='flex w-full h-20 bg-gray-100 items-center'>
            <Box className="bg-primary-700 h-16 w-16 flex items-center justify-center">
                <Typography className="text-gray-100 font-bold text-5xl">R</Typography>
            </Box>
            <Typography className="text-primary-700 font-bold text-4xl ml-2">RatedRizz</Typography>
            <div className='flex w-[90%] justify-end space-x-5'>
            <Button size='large' className='text-primary-700 w-32 h-12'>Pricing</Button>
            <Button size='large' className='text-primary-700 w-32 h-12'>Login</Button>
            <Button variant='contained' size='large' className='bg-primary-700 w-32 h-12'>Signup!</Button>
            </div>
        </div>
    )
}

export default Navbar