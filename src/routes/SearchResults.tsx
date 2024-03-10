import { Button, Stack, Typography } from "@mui/material";
import SearchBar from "../shared/components/Searchbar";
import UnderConstruction from "./errors/UnderConstruction";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListOfResults, University, getSearchResults } from "../services/search";

const UniversityAccordian = (props: University) => {
  return (
    <Accordion
    className="bg-indigo-100"
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="h2" className="text-primary-600 font-bold text-2xl ml-2">
        {props.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
      <Typography variant="body1" className="text-xl ml-2">
        <span className="text-primary-600 font-bold">Location: </span>
        <span className="text-secondary-900 font-normal">{props.locaiton}</span>
      </Typography>
      <Typography variant="body1" className="text-xl ml-2">
        <span className="text-primary-600 font-bold">Popular Professors: </span>
        <span className="text-secondary-900 font-normal">{props.top_five}</span>
      </Typography>
      <Typography variant="body1" className="text-xl ml-2">
        <span className="text-primary-600 font-bold">Courses: </span>
        <span className="text-secondary-900 font-normal">{props.courses}</span>
      </Typography>  
      </AccordionDetails>
        <AccordionActions>
        <Button className="text-primary-600">Visit University Page</Button>
     </AccordionActions>
    </Accordion>
  )
}

const ResultList = (props: ListOfResults) => {
  return (
    <div>
        <Stack
        direction="column"
        rowGap={3}
        className="mt-20"
        >
        
        <UniversityAccordian {...props.results[0] as University}/>
        </Stack>
    </div>
  )
}


const SearchResults = () => {
  const res = getSearchResults()
    return (
        <Stack
        direction="column" 
        justifyContent="center"
        alignItems="center"
        rowGap={2}
        >
        <SearchBar/>
        <Typography variant="h1" className="text-primary-600 font-normal tracking-widest text-xl mt-20">SEARCH RESULTS</Typography>
        <Typography variant="h2" className="font-bold text-7xl ml-2">
        <span className="text-secondary-800">Matching </span>
        <span className="text-primary-600">{res.type}</span>
        </Typography>
        <ResultList {...res}/>
      </Stack>
    )
}

export default SearchResults;