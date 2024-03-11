import { Autocomplete, TextField } from "@mui/material";
import { ListOfResults, searchProfessors, searchUniversities } from "../../services/search";

type AutocompleteSearchBarType = {
    type: "University" | "Professor"
    className: string
} 


const AutocompleteSearch = (props: AutocompleteSearchBarType) => {
    
    let searchOptions: {label: string, id: number}[]
    let res: ListOfResults

    if (props.type === "University") {
        res = searchUniversities({name: ""})
    } else {
        res = searchProfessors({name: ""})
    }
    searchOptions = res.results.map((item) => ({label: item.name, id: item.id}))

    return (
        <Autocomplete options={searchOptions}
            renderInput={(params) => <TextField {...params} label={props.type} />}
            className={props.className}
        />
    )
}

export default AutocompleteSearch;