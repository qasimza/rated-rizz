import { Avatar, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import SearchBar from "../shared/components/Searchbar";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListOfResults, Professor, University, getSearchResults } from "../services/search";
import GradeIcon from '@mui/icons-material/Grade';

const UniversityAccordian = (props: University) => {
  const Professor = (props: {name: String}) => {
    return (
      <Stack
      direction="column"
      alignItems="center"
      >
        <Avatar className="bg-primary-600 w-20 h-20">
          <GradeIcon className="text-6xl" />
        </Avatar>
        <Typography className="text-secondary-600 font-semibold">{props.name}</Typography>
      </Stack>
    )
  }
  
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="body1" className="text-2xl">
        <span className="text-primary-600 font-bold">{props.name}, </span>
        <span className="text-secondary-900 font-normal">{props.location}</span>
        </Typography>
      </AccordionSummary>
      
      <AccordionDetails>
      <Typography variant="h3" className="text-primary-600 font-medium tracking-widest text-base mb-6">MOST RECENTLY SEARCHED PROFESSORS</Typography>
        <Stack
        direction={"row"}
        alignItems="center"
        justifyContent="center"
        columnGap={10}
        className="mb-4">
          {props.top_five.map(professor => (
          <Professor name={professor}/>
        ))
      }
        </Stack>  
        <Divider className="mb-4"/>
        <Typography variant="h3" className="text-primary-600 font-medium tracking-widest text-base mb-4">POPULAR COURSES</Typography>
        {props.courses.map(course => (
          <Chip label={course} className="m-1"/>
          ))
        }
     </AccordionDetails>

     <AccordionActions>
        <Button className="text-primary-600">Click here for more...</Button>
     </AccordionActions>

    </Accordion>
  )
}

const ProfessorAccordian = (props: Professor) => {

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography variant="body1" className="text-2xl">
        <span className="text-primary-600 font-bold">{props.name}, </span>
        <span className="text-secondary-900 font-normal">{props.university}</span>
        </Typography>
      </AccordionSummary>
      
      <AccordionDetails>
      <Typography variant="body1" className="text-2xl">{props.review}</Typography>
        <Divider className="mb-4"/>
        {props.courses.map(course => (
          <Chip label={course} className="m-1"/>
          ))
        }
     </AccordionDetails>

     <AccordionActions>
        <Button className="text-primary-600">Click here for more...</Button>
     </AccordionActions>

    </Accordion>
  )
}

const ResultList = (props: ListOfResults) => {
  if (props.type==="Universities") {
    return (
      <>
      {props.results.map(result =>
        <UniversityAccordian {...result as University}/>
        )}
      <Button variant='contained' size='large' className='bg-primary-600 h-12'>Don't see your university? Click here to add!</Button>
      </> 
    )
  } else {
    return (
      <>
      {props.results.map(result =>
        <ProfessorAccordian {...result as Professor}/>
        )}
      <Button variant='contained' size='large' className='bg-primary-600 h-12'>Don't see your professor? Click here to add!</Button>
      </> 
    )
  }
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
        <div className="mt-20 flex flex-col space-y-4 max-w-[60%]">
          <ResultList {...res}/>
        </div>
      </Stack>
    )
}

export default SearchResults;

