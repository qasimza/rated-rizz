import { Avatar, Button, Chip, Divider, Stack, Typography } from "@mui/material";
import SearchBar from "../../shared/components/Searchbar";
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ListOfResults, ProfessorType, SearchQueryType, UniversityType, getProfessor, getSearchResults, getUniversity } from "../../services/search";
import GradeIcon from '@mui/icons-material/Grade';
import BaseTemplate from "../../shared/components/BaseTemplate";

const UniversityAccordian = (props: UniversityType) => {
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
    <div>
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
          {props.professor_ids.slice(0, 5).map(professor_id => (
          <Professor name={getProfessor(professor_id).name}/>
        ))
      }
        </Stack>  
        <Divider className="mb-4"/>
        <Typography variant="h3" className="text-primary-600 font-medium tracking-widest text-base mb-4">POPULAR COURSES</Typography>
        {props.course_ids.map(course_id => (
          <Chip label={course_id} className="m-1 bg-blue-400 text-white font-bold text-sm"/>
          ))
        }
     </AccordionDetails>

     <AccordionActions>
        <Button className="text-primary-600">Click here for more...</Button>
     </AccordionActions>

    </Accordion>
    </div>
  )
}

const ProfessorAccordian = (props: ProfessorType) => {
  const Rating = (props: {rating: number, total: number}) => {
    return (
      <Stack
      direction="column"
      alignItems="center"
      className="col-span-1"
      >
        <Avatar className="bg-primary-600 w-20 h-20">
          <GradeIcon className="text-6xl" />
        </Avatar>
        <Typography className="text-primary-600 font-semibold text-2xl">{props.rating} / 5.0</Typography>
        <Typography className="text-secondary-600 font-semibold text-lg">({props.total} total reviews)</Typography>
      </Stack>
    )
  }
  const universityInfo = getUniversity(props.university_id);
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1" className="text-2xl">
          <span className="text-primary-600 font-bold">{props.name}, </span>
          <span className="text-secondary-900 font-normal">{universityInfo.name}, {universityInfo.location}</span>
          </Typography>
        </AccordionSummary>
        
        <AccordionDetails>
        <Typography variant="h3" className="text-primary-600 font-medium tracking-widest text-base mb-6">
          RIZZ SCORE AND REVIEW (AI GENERATED SUMMARY)
        </Typography>
        <div className="grid grid-cols-5">
          <Rating rating={3.8} total={22}/>
          <Typography variant="body1" className="text-base col-span-4">{props.overall_review}</Typography>
          </div>
        <Divider className="mb-4 mt-4"/>
        <Typography variant="h3" className="text-primary-600 font-medium tracking-widest text-base mb-4">COURSES TAUGHT</Typography>

          {props.course_ids.map(course_id => (
            <Chip label={course_id} className="m-1 bg-blue-400 text-white font-bold text-sm"/>
            ))
          }
      </AccordionDetails>

      <AccordionActions>
          <Button className="text-primary-600">Click here for more...</Button>
      </AccordionActions>

      </Accordion>
    </div>
  )
}

const ResultList = (props: ListOfResults) => {
  if (props.type==="Universities") {
    return (
      <>
      {props.results.map(result =>
        <UniversityAccordian {...result as UniversityType}/>
        )}
      <Button variant='contained' size='large' className='bg-primary-600 h-12'>Don't see your university? Click here to add!</Button>
      </> 
    )
  } else {
    return (
      <>
      {props.results.map(result =>
        <ProfessorAccordian {...result as ProfessorType}/>
        )}
      <Button variant='contained' size='large' className='bg-primary-600 h-12'>Don't see your professor? Click here to add!</Button>
      </> 
    )
  }
}

const SearchResultsComponent = () => {
  const searchQuery1: SearchQueryType = {  //  Approximate uni name match
    university: {
      name: "Florida"
    }
  }
  const searchQuery2: SearchQueryType = { //  Exact uni (id) match
    university: {   
      id: 1,
      name: "Florida"
    }
  }
  const searchQuery3: SearchQueryType = { //  Exact uni and prof (id) match
    university: { 
      id: 1,
      name: "Florida"
    },
    professor: {
      id: 2,
      name: "Two"
    }
  }

  const searchQuery4: SearchQueryType = { //  Approx uni and prof name match
    university: {
      name: "Florida"
    },
    professor: {
      name: "name"
    }
  }
  
  const searchQuery5: SearchQueryType = { //Approx prof name match
    professor: {
      name: "name"
    }
  }

  const searchQuery6: SearchQueryType = { // Exact prof (id) match
    professor: {
      id: 12,
      name: "name"
    }
  }

  const res = getSearchResults(searchQuery4)
    return (
        <>
        <Typography variant="h1" className="text-primary-600 font-normal tracking-widest text-xl mt-20">SEARCH RESULTS</Typography>
        <Typography variant="h2" className="font-bold text-7xl ml-2">
        <span className="text-secondary-800">Matching </span>
        <span className="text-primary-600">{res.type}</span>
        </Typography>
        <div className="mt-20 flex flex-col space-y-4 max-w-[60%]">
          <ResultList {...res}/>
        </div>
      </>
    )
}

const SearchResultsPage = () => {
  return (
    <BaseTemplate navbarComponent={<SearchBar />} pageComponent={<SearchResultsComponent />} />
)
}

export default SearchResultsPage;

