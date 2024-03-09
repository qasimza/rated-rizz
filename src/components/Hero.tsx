import { Autocomplete, Button, Stack, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';

const universities = [
    {label: "University of South Florida"}
]

const professors = [
    {label: "Dr. Prasant Mohapatra"}
]

const Hero = () => {
    return (
        <Stack 
        direction="column" 
        justifyContent="center"
        alignItems="center"
        className="mt-40"
        >
            
            <Autocomplete options={universities}
            renderInput={(params) => <TextField {...params} label="University" />}
            className="w-96 mb-4"
            />
            <Autocomplete options={professors}
            renderInput={(params) => <TextField {...params} label="Professor" />} 
            className="w-96"
            />
            <Button variant='contained' endIcon={<SearchIcon/>} className="bg-primary-600 w-96 h-12 mt-5">Search</Button>
            
            <Typography variant="h1" className="text-primary-600 font-bold text-7xl mt-6">RatedRizz</Typography>
            <Typography variant="h2" className="text-secondary-700 font-semibold text-3xl">Student success made easy!</Typography>
        </Stack>
    )
}
export default Hero;    