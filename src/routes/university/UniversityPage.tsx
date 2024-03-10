import { Stack, Typography } from "@mui/material";
import SearchBar from "../../shared/components/Searchbar";
import { UniversityType } from "../../services/search";

const UniversityPage = (props: UniversityType) => {
      return (
          <Stack
          direction="column" 
          justifyContent="center"
          alignItems="center"
          rowGap={2}
          >
          <SearchBar/>
          <Typography variant="h1" className="text-primary-600 font-normal tracking-widest text-xl mt-20">SEARCH RESULTS - {props.name}</Typography>
          <Typography variant="h2" className="font-bold text-7xl ml-2">
          <span className="text-secondary-800">Matching </span>
          <span className="text-primary-600">Professors</span>
          </Typography>
          <Typography variant="h2" className="font-bold text-7xl ml-2 text-secondary-800">{props.location}</Typography>
          <div className="mt-20 flex flex-col space-y-4 max-w-[60%]">
            
          </div>
        </Stack>
      )
  }

export default UniversityPage;