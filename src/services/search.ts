export type University = {
    name: String
    locaiton: String
    top_five: String[]
    courses: String[]
  }
  
export type Professor = {
    name: String
    university: String
    courses: String
    review: String
  }

const SearchResultTypes = ["Professors", "Universities"] as const;
export type SearchResultType = typeof SearchResultTypes[number];

  
export type ListOfResults = {
    type: SearchResultType;
    results: University[] | Professor[];
}

export function addProfessor(){
    return Promise.resolve(true)
}

export function addUniversity(){
    return Promise.resolve(true)
}

export function searchProfessors(){
    const professors = [
        {label: "Dr. Prasant Mohapatra"}
    ]
    return professors
}

export function searchUniversities(): University[]{
    const universities = [
        {
            name: "University of South Florida",
            locaiton: "Tampa",
            top_five: ["Professor One", "Professor Two", "Professor Three", "Professor Four", "Professor Five"],
            courses: [""]
        },
    ]
    return universities
}

export function getProfessor(){
    const professor = {
        name: 'Dr. '
    }
    
    return professor
}

export function getSearchResults(): ListOfResults{
    const universities: University[] = searchUniversities();
    const searchResults = {
        type: SearchResultTypes[1],
        results: universities,
    }
    return searchResults
}

export function getAssignments(){

}