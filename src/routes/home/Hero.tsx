import { Button, Divider, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import AutocompleteSearch from "../../shared/components/AutocompleteSearch";


const Hero = () => {
    return (
        <div className="flex h-[80vh] w-screen justify-center items-center">
            <div className="flex flex-row justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-center gap-4">
                <AutocompleteSearch type="University" className="w-96"/>
                <AutocompleteSearch type="Professor" className="w-96"/>
                <Button 
                    variant='contained' 
                    endIcon={<SearchIcon/>} 
                    className="bg-primary-600 w-96 h-12">
                        Search
                </Button>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className="flex flex-col justify-center items-center gap-2">
            <Typography variant="h1" className="text-primary-600 font-bold text-7xl mt-6">RatedRizz</Typography>
            <Typography variant="h2" className="text-secondary-700 font-semibold text-3xl">Student success made easy!</Typography>
            </div>
        </div>
        </div>
        
    )
}
export default Hero;    