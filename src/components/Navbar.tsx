import Button from '@mui/material/Button';

const Navbar = () => {
    return (
        <div className='w-full h-20 bg-gray-100'>
            <Button size='large' className='text-primary-800'>Pricing</Button>
            <Button size='large' className='text-primary-800'>Login</Button>
            <Button variant='contained' size='large' className='bg-primary-100'>Signup</Button>
        </div>
    )
}

export default Navbar