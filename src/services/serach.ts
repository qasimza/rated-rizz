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

export function searchUniversities(){
    const universities = [
        {label: "University of South Florida"}
    ]
    return universities
}

export function getProfessor(){
    const professor = {
        name: 'Dr. '
    }
    
    return professor
}

export function getAssignments(){

}