import { Button, Divider, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import SearchIcon from '@mui/icons-material/Search';
import AutocompleteSearch from "../../shared/components/AutocompleteSearch";


const Hero = () => {
    return (
        <Stack 
        direction="row" 
        justifyContent="center"
        alignItems="center"
        className="mt-40"
        divider={<Divider orientation="vertical" flexItem />}
        columnGap={4}
        >
            <Stack 
            direction="column" 
            justifyContent="center"
            alignItems="center"
            rowGap={2}
            >
                <AutocompleteSearch type="University" className="w-96"/>
                <AutocompleteSearch type="Professor" className="w-96"/>
                <Button 
                    variant='contained' 
                    endIcon={<SearchIcon/>} 
                    className="bg-primary-600 w-96 h-12">
                        Search
                </Button>
            </Stack>
            <Stack 
            direction="column" 
            justifyContent="center"
            alignItems="center"
            columnGap={3}
            >
                <Typography variant="h1" className="text-primary-600 font-bold text-7xl mt-6">RatedRizz</Typography>
            <Typography variant="h2" className="text-secondary-700 font-semibold text-3xl">Student success made easy!</Typography>
            </Stack> 
        </Stack>
    )
}
export default Hero;    