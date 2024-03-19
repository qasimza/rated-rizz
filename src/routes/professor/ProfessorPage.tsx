import { Avatar, Box, Card, CardContent, Chip, Divider, Button, Typography, Autocomplete, TextField } from "@mui/material";
import { ProfessorType, getProfessor } from "../../services/search";
import SearchBar from "../../shared/components/Searchbar";
import BaseTemplate from "../../shared/components/BaseTemplate";
import GradeIcon from '@mui/icons-material/Grade';
import AddIcon from '@mui/icons-material/Add';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

type ReviewCardInfo = {
    review: string
    rating?: number
    tags: string[]
    date: string
}

const RatingCount = (props: {bucket: number, count: number}) => {
    return (
        <div className="flex flex-row gap-3">
            <Box className="bg-blue-400 h-8 w-8 text-center">
            <Typography className="text-white font-bold text-xl">{props.bucket}+</Typography>
            </Box>
            <Typography className="text-secondary-800 text-xl">{props.count}</Typography>
        </div>
    )
}

const RatingCounts = () => {
    return (
        <div className="flex flex-row items-center justify-evenly gap-5">            
            {[0, 1, 2, 3 ,4].map(bucket => <RatingCount bucket={bucket} count={2*bucket} />)}
        </div>
    )
}

const ReviewCard = (props:ReviewCardInfo) => {
    return (
        <Card>
            <CardContent className="flex flex-row gap-5 m-2">
                <Avatar className="bg-primary-600 text-white font-bold text-4xl w-20 h-20">
                    {props.rating}
                </Avatar>
                <div className="flex flex-col w-full gap-2 mt-4">
                <Typography>{props.review}</Typography>
                <Divider /> 
                    <div className="flex flex-row gap-2">
                    {
                        props.tags.map((tag) => <Chip label={'#'+tag.toUpperCase()} className="bg-blue-400 text-white font-bold text-sm"/>)
                    }
                    </div>
                    <div className="flex flex-row justify-end mt-4">
                    <Typography variant="h1" className="text-secondary-600 italic font-normal text-sm">
                        {props.date}
                    </Typography>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

const ReviewsList = (props: {reviews: string[]}) => {
    return (
        <div className="flex max-w-[35vw] flex-col gap-4">
        <Typography variant="h2" className="text-primary-600 font-normal tracking-widest text-xl">
            REVIEWS            
        </Typography>        
        <div className="flex flex-row justify-between mx-4">
        <Button variant="contained" size="large" className="bg-primary-600" startIcon={<AddIcon/>}>Add a review!</Button>
        <Button variant="contained" size="large" className="bg-primary-600" startIcon={<FilterAltIcon/>}>Filter</Button>
        </div>
        
        {props.reviews.map(
            (review) => 
                <ReviewCard 
                review={review} 
                rating={3.6} 
                tags={["easy", "helpful", "slow-paced"]} 
                date="December 12, 2023"/>)}
    </div>
    )
}

const ProfessorCard = (props: {professor: ProfessorType}) => {
    return (
        <Card className="min-w-[45vw] max-h-[88vh]">
        <CardContent className="flex flex-col gap-5 w-full items-start">
            <Typography variant="h1" className="text-primary-600 font-bold text-5xl">
                {props.professor.name} 
            </Typography>
            <div className="flex flex-row gap-5">
            <Avatar className="bg-primary-600 text-white font-bold w-20 h-20 ml-3">
                <GradeIcon className="text-6xl" />
            </Avatar>
            <div className="flex flex-col">
                <Typography variant="h1" className="text-primary-600 font-bold text-3xl">
                    {props.professor.overall_rating} / 5.0 <span className="font-normal text-blue-400">(overall)</span>
                    <div className="text-secondary-600 font-semibold text-lg">{props.professor.reviews.length} RATINGS.</div>
                </Typography>
                <Divider className="my-4"/>
                <RatingCounts />
            </div>
            </div>
            <div className="flex flex-row gap-8 items-center w-7/8">
                <Autocomplete options={props.professor.course_ids}
                renderInput={(params) => <TextField {...params} label="Courses" />}
                className="ml-8 mt-2 w-128"
                />
                <Button variant="contained" size="large" className="bg-primary-600 h-16" startIcon={<AddIcon/>}>Add a course!</Button>
            </div>
        <Box className="w-80 bg-blue-100 h-96" />
        <Button variant="contained" size="large" className="bg-primary-600" startIcon={<AddIcon/>}>Add an assignment!</Button>
        </CardContent>
        </Card>
        )
}

const PageComponent = () => {
    const professor = getProfessor(1);
    return (
        <div className="flex flex-row gap-4 justify-center">
            <ReviewsList reviews={professor.reviews}/>
            <ProfessorCard professor={professor} />
        </div>
    )
}

const ProfessorPage = () => {
    return (
        <BaseTemplate navbarComponent={<SearchBar />} pageComponent={<PageComponent />} />
    )
}

export default ProfessorPage;