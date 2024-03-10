export type UniversityType = {
    id: number
    name: string
    location: string
    professor_ids: number[]
    course_ids: string[]
  }
  
export type ProfessorType = {
    id: number
    name: string
    university_id: number // Eventually switch to number[] since one professor may belong to multiple colleges
    overall_rating: number
    overall_review: string
    course_ids: string[]
    reviews: string[]
  }

export type CourseType = {
    course_id: string
    name: string
    professor_id: number[]
}

const searchResultTypes = ["Professors", "Universities"] as const;
export type SearchResultType = typeof searchResultTypes[number];

const matchTypes = ["Approximate", "Exact"] as const;
export type MatchType = typeof matchTypes[number];

export type SearchQueryBaseType = {
    id?: number;
    name: string;
}

export type SearchQueryType = {
    university: SearchQueryBaseType;
    professor?: SearchQueryBaseType;
} | {
    university?: SearchQueryBaseType;
    professor: SearchQueryBaseType;
}


export type ListOfResults = {
    type: SearchResultType;
    matchType: MatchType;
    results: UniversityType[] | ProfessorType[];
}

export function addProfessor(props: ProfessorType){
    return Promise.resolve(true)
}

export function addUniversity(props: UniversityType){
    return Promise.resolve(true)
}

export function getProfessor(id: number): ProfessorType{
    return professors[id]
}

export function getUniversity(id: number){
    return universities[id]
}

export function searchProfessors(query: SearchQueryBaseType, university_ids?: number[]): ListOfResults{
    let matchType: MatchType
    let results: ProfessorType[]
    
    if (query.id) {
       matchType = "Exact";
       results = [professors[query.id]]    
    } else if (university_ids) {
        matchType = "Approximate"
        results = professors.filter((professors) => professors.name.includes(query.name)
                                                    && university_ids.includes(professors.university_id));
    } else {
        matchType = "Approximate"
        results = professors.filter((professors) => professors.name.includes(query.name));
    }
    const searchResults = {
        type: searchResultTypes[0],
        matchType: matchType,
        results: results,
    }
    return searchResults
}

export function searchUniversities(query: SearchQueryBaseType): ListOfResults{
    let matchType: MatchType
    let results: UniversityType[]
    
    if (query.id) {
       matchType = "Exact";
       results = [universities[query.id]]    
    } else {
        matchType = "Approximate"
        results = universities.filter((university) => university.name.includes(query.name));

    }
    const searchResults = {
        type: searchResultTypes[1],
        matchType: matchType,
        results: results,
    }
    return searchResults
}

export function getSearchResults(props: SearchQueryType): ListOfResults{   
    
    let searchResults: ListOfResults;
    
    if (props.university && props.professor){
        const university_ids = searchUniversities(props.university).results.map(u => (u.id))
        searchResults = searchProfessors(props.professor, university_ids)
    } else if (props.university) {
        searchResults = searchUniversities(props.university)
    } else if (props.professor) {
        searchResults = searchProfessors(props.professor)
    } else {
        throw Error
    }
    return searchResults
}

export function getAssignments(){

}


// DUMMY DATA 

const universities: UniversityType[] = [
    {   
        id: 0,
        name: "University of Test",
        location: "Test, LO",
        professor_ids: [1, 4, 6, 7, 15],
        course_ids: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
        "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013",]
    },
    {   
        id: 1,
        name: "University of South Florida",
        location: "Tampa, FL",
        professor_ids: [1, 4, 6, 7, 15],
        course_ids: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
        "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013",]
    },
    {
        id: 2,
        name: "University of Florida",
        location: "Gainsville, FL",
        professor_ids: [2, 3, 8, 9, 11, 12],
        course_ids: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
        "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013", "COUR1009", "COUR1201", "COUR3002", "COUR3001"]
    },
    {
        id: 3,
        name: "University of Miami",
        location: "Coral Gables, FL",
        professor_ids: [5, 10, 13, 14],
        course_ids: ["COUR1001", "COUR1009", "COUR1201", "COUR3002", "COUR3001", 
        "COUR2201", "COUR2001", "COUR1041", "COUR1201", "COUR1021", "COUR1013",]
    },
]

const professors: ProfessorType[] = [
    {
        id: 0,
        name: "Professor Zero",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 1,
        name: "Professor Onename",
        university_id: 1,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 2,
        name: "Professor Twoname",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 3,
        name: "Professor Threename",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 4,
        name: "Professor Fourname",
        university_id: 1,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id:5,
        name: "Professor Fivename",
        university_id: 3,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 6,
        name: "Professor Sixname",
        university_id: 1,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 7,
        name: "Professor Sevename",
        university_id: 1,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 8,
        name: "Professor Eightname",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 9,
        name: "Professor Ninename",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 10,
        name: "Professor Tenname",
        university_id: 3,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 11,
        name: "Professor Eleven",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 12,
        name: "Professor Twelve",
        university_id: 2,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 13,
        name: "Professor Thirteen",
        university_id: 3,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 14,
        name: "Professor Fourteen",
        university_id: 3,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
    {
        id: 15,
        name: "Professor Fifteen",
        university_id: 1,
        overall_rating: 4.2,
        overall_review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        course_ids: ["COUR1001", "COUR1009", "COUR1201"],
        reviews: [""]
    },
   
]