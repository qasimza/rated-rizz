import { Stack } from "@mui/material";
import SearchBar from "../shared/components/Searchbar";
import UnderConstruction from "./errors/UnderConstruction";

const SearchResults = () => {
    return (
        <Stack
        direction="column" 
        justifyContent="center"
        alignItems="center"
        rowGap={4}
        >
        <SearchBar/>
      </Stack>
    )
}

export default SearchResults;