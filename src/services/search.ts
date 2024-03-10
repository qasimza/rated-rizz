export type University = {
    name: String
    location: String
    top_five: String[]
    courses: String[]
  }
  
export type Professor = {
    name: String
    university: String
    rating: number
    courses: String[]
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

export function searchProfessors(): Professor[]{
    const professors = [
        {
            name: "Professor Onename",
            university: "University of South Florida",
            rating: 4.2,
            courses: ["COUR1001", "COUR1009", "COUR1201"],
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
        },
        {
            name: "Professor Twoname",
            university: "University of Florida",
            rating: 4.2,
            courses: ["COUR1001", "COUR1009", "COUR1201"],
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }       
    ]
    return professors
}

export function searchUniversities(): University[]{
    const universities = [
        {
            name: "University of South Florida",
            location: "Tampa, FL",
            top_five: ["Professor One", "Professor Two", "Professor Three", "Professor Four", "Professor Five"],
            courses: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
            "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013",]
        },
        {
            name: "University of Florida",
            location: "Gainsville, FL",
            top_five: ["Professor One", "Professor Two", "Professor Three", "Professor Four", "Professor Five"],
            courses: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
            "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013", "COUR1009", "COUR1201", "COUR3002", "COUR3001"]
        },
        {
            name: "University of Miami",
            location: "Coral Gables, FL",
            top_five: ["Professor One", "Professor Two", "Professor Three", "Professor Four", "Professor Five"],
            courses: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
            "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013",]
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
    const universities: Professor[] = searchProfessors();
    const searchResults = {
        type: SearchResultTypes[0],
        results: universities,
    }
    return searchResults
}

export function getAssignments(){

}