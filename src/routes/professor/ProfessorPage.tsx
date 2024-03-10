import { Stack } from "@mui/material";
import { getProfessor } from "../../services/search";
import SearchBar from "../../shared/components/Searchbar";
import BaseTemplate from "../../shared/components/BaseTemplate";

const PageComponent = () => {
    const professor = getProfessor(1);
    return (
        <Stack 
        direction="row" 
        justifyContent="center"
        alignItems="center"
        rowGap={2}
        >
            <div>SS</div>
            <div>FF</div>
        </Stack>
    )
}

const ProfessorPage = () => {
    return (
        <BaseTemplate navbarComponent={<SearchBar />} pageComponent={<PageComponent />} />
    )
}

export default ProfessorPage;